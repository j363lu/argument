<?php
/* 
CREATE TABLE Metadata (
  ID Varchar(20) Primary Key,
  Topic Varchar(20),
  PoliticalPreference Varchar(20),
  Type Varchar(20),
  StartTimeToronto Timestamp,
  EndTimeToronto Timestamp DEFAULT CURRENT_TIMESTAMP,
  CompletionCode Varchar(25)
);
*/

/* 
CREATE TABLE PostConversation (
  ID Varchar(20) Primary Key,
  preferComplexProblems TINYINT,
  likeThinking TINYINT,
  thinkingIsNotFun TINYINT,
  preferLittleThought TINYINT,
  enjoyNewSolutions TINYINT,
  preferImportantTasks TINYINT,
  postTopicOpinion TINYINT,
  writingImpact TINYINT,
  sex Varchar(100)
);
*/

/* 
CREATE TABLE Messages (
  ID Varchar(20) Primary Key,
  systemPrompt TEXT,
  user1 TEXT,
  bot1 TEXT,
  user2 TEXT,
  bot2 TEXT,
  user3 TEXT,
  bot3 TEXT,
  user4 TEXT,
  bot4 TEXT
);
*/

define("SERVER", "localhost");
define("USERNAME", "dicelab");
define("PASSWORD", "56YI1gYf2hgM2lBA");
define("DATABASE", "argumentv2");

header('Access-Control-Allow-Origin: https://argument2.vercel.app');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Connect to mysql
$conn = new mysqli(SERVER, USERNAME, PASSWORD, DATABASE);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Database connected successfully \n";

// get data
$postConversation = array("preferComplexProblems", "likeThinking", "thinkingIsNotFun", "preferLittleThought", "enjoyNewSolutions", "preferImportantTasks", "postTopicOpinion", "writingImpact", "sex");

$data = json_decode($_POST["data"], true);
$messages = json_decode($_POST["messages"]);
$id = !empty($_POST["id"]) ? $_POST["id"] : "null";
$startTime = !empty($_POST["startTime"]) ? $_POST["startTime"] : "null";
$endTime = !empty($_POST["endTime"]) ? $_POST["endTime"] : "null";
$completionCode = !empty($_POST["completionCode"]) ? $_POST["completionCode"] : "null";
$type = !empty($_POST["type"]) ? $_POST["type"] : "null";
$topic = !empty($_POST["topic"]) ? $_POST["topic"] : "null";
$politicalPreference = !empty($_POST["politicalPreference"]) ? $_POST["politicalPreference"] : "null";

// if sex=="other", get the sex-Comment from data instead
if ($data["sex"] === "other" && isset($data["sex-Comment"])) {
  $data["sex"] = $data["sex-Comment"];
}

/*********************** Metadata ***********************/
$sql = "INSERT INTO Metadata VALUES ({$id},'{$topic}','{$politicalPreference}','{$type}','{$startTime}','{$endTime}','{$completionCode}')";

// send sql query
if ($conn->query($sql) === TRUE) {
  echo "New Metadata record created successfully \n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

/*********************** PostConversation ***********************/
// construct sql query
$sql = "INSERT INTO PostConversation VALUES ({$id}";
foreach ($postConversation as $column) {
  $value = $data[$column];
  if (isset($value) && gettype($value) === "integer") {
    $sql = "{$sql},{$value}";
  } elseif (!empty($value) && gettype($value) === "string") {
    $value = $conn->real_escape_string($value);
    $sql = "{$sql},'{$value}'";
  } else {
    $sql = "{$sql},null";
  }
}
$sql = $sql . ")";

// send sql query
if ($conn->query($sql) === TRUE) {
  echo "New postConversation record created successfully \n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}


/*********************** Messages ***********************/
// construct sql query
$sql = "INSERT INTO Messages VALUES ({$id}";
foreach ($messages as $message) {
  $value = $conn->real_escape_string($message);
  $sql = "{$sql},'{$value}'";
}

$sql = $sql . ")";

if (empty($messages)) {
  $sql = "INSERT INTO Messages VALUES ({$id},null,null,null,null,null,null,null,null,null)";
}

// send sql query
if ($conn->query($sql) === TRUE) {
  echo "New messages record created successfully \n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
