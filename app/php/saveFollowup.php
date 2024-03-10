<?php
/* 
CREATE TABLE Metadata (
  ID Varchar(20) Primary Key,
  Type Varchar(20),
  StartTimeToronto Timestamp,
  EndTimeToronto Timestamp DEFAULT CURRENT_TIMESTAMP,
  CompletionCode Varchar(25)
);
*/

/* 
CREATE TABLE Demographic (
  ID Varchar(20) Primary Key,
  Age TINYINT,
  Sex Varchar(100),
  Education Varchar(40),
  Income Int,
  Social TINYINT,
  Fiscal TINYINT
);
*/

/* 
CREATE TABLE Decision (
  ID Varchar(20) Primary Key,
  rational1 TINYINT,
  rational2 TINYINT,
  rational3 TINYINT,
  rational4 TINYINT,
  rational5 TINYINT,
  intuitive1 TINYINT,
  intuitive2 TINYINT,
  intuitive3 TINYINT,
  intuitive4 TINYINT,
  intuitive5 TINYINT
);
*/

/* 
CREATE TABLE Personality (
  ID Varchar(20) Primary Key,
  personality1 TINYINT,
  personality2 TINYINT,
  personality3 TINYINT,
  personality4 TINYINT,
  personality5 TINYINT,
  personality6 TINYINT,
  personality7 TINYINT,
  personality8 TINYINT,
  personality9 TINYINT,
  personality10 TINYINT,
  attention TINYINT
);
*/

/* 
CREATE TABLE Manipulation (
  ID Varchar(20) Primary Key,
  manipulation1 TINYINT,
  manipulation2 TINYINT,
  manipulation3 TINYINT,
  manipulation4 TINYINT,
  manipulation5 TINYINT,
  manipulation6 TINYINT
);
*/

/* 
CREATE TABLE PostConversation (
  ID Varchar(20) Primary Key,
  postConversation1 TINYINT
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
define("DATABASE", "argument");

header('Access-Control-Allow-Origin: https://argument.vercel.app');
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
$demographics = array("Age", "Sex", "Education", "Income", "Social", "Fiscal");
$postConversation = array("postConversation1");
$personality = [];
for ($i = 1; $i <= 10; $i++) {
  $personality[] = "personality" . $i;
}
$personality[] = "attention";
$decision = array("rational1", "rational2", "rational3", "rational4", "rational5", "intuitive1", "intuitive2", "intuitive3", "intuitive4", "intuitive5");
$manipulation = array("manipulation1", "manipulation2", "manipulation3", "manipulation4", "manipulation5", "manipulation6");

$data = json_decode($_POST["data"], true);
$messages = json_decode($_POST["messages"]);
$id = !empty($_POST["id"]) ? $_POST["id"] : "null";
$startTime = !empty($_POST["startTime"]) ? $_POST["startTime"] : "null";
$endTime = !empty($_POST["endTime"]) ? $_POST["endTime"] : "null";
$completionCode = !empty($_POST["completionCode"]) ? $_POST["completionCode"] : "null";
$type = !empty($_POST["type"]) ? $_POST["type"] : "null";

// if Gender=="other", get the Gender-Comment from data instead
if ($data["Gender"] === "other" && isset($data["Gender-Comment"])) {
  $data["Gender"] = $data["Gender-Comment"];
}

/*********************** Demographics ***********************/
// construct sql query
$sql = "INSERT INTO Demographic VALUES ({$id}";
foreach ($demographics as $column) {
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
  echo "New demographic record created successfully \n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

/*********************** Metadata ***********************/
$sql = "INSERT INTO Metadata VALUES ({$id}, '{$type}','{$startTime}','{$endTime}','{$completionCode}')";

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

/*********************** Personality ***********************/
// construct sql query
$sql = "INSERT INTO Personality VALUES ({$id}";
foreach ($personality as $column) {
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
  echo "New personality record created successfully \n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

/*********************** Decision ***********************/
// construct sql query
$sql = "INSERT INTO Decision VALUES ({$id}";
foreach ($decision as $column) {
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
  echo "New decision record created successfully \n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

/*********************** Manipulation ***********************/
// construct sql query
$sql = "INSERT INTO Manipulation VALUES ({$id}";
foreach ($manipulation as $column) {
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
  echo "New manipulation record created successfully \n";
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
