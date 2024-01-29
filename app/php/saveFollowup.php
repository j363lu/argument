<?php
/* 
CREATE TABLE Metadata (
  ID Varchar(13) Primary Key,
  Type Varchar(20),
  StartTimeToronto Timestamp,
  EndTimeToronto Timestamp DEFAULT CURRENT_TIMESTAMP,
  CompletionCode Varchar(25)
);
*/

/* 
CREATE TABLE Demographic (
  ID Varchar(13) Primary Key,
  Age TINYINT,
  Gender Varchar(100),
  Education Varchar(40),
  Major Varchar(100),
  Income Int,
  Occupation Varchar(100)
);
*/

/* 
CREATE TABLE Personality (
  ID Varchar(13) Primary Key,
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
  personality11 TINYINT,
  personality12 TINYINT,
  personality13 TINYINT,
  personality14 TINYINT,
  personality15 TINYINT,
  personality16 TINYINT,      
  personality17 TINYINT,
  personality18 TINYINT,
  personality19 TINYINT,
  personality20 TINYINT,
  personality21 TINYINT,
  personality22 TINYINT,
  personality23 TINYINT,
  personality24 TINYINT,
  personality25 TINYINT,
  personality26 TINYINT,
  personality27 TINYINT,
  personality28 TINYINT,
  personality29 TINYINT,
  personality30 TINYINT,
  personality31 TINYINT,
  personality32 TINYINT,  
  personality33 TINYINT,
  personality34 TINYINT,
  personality35 TINYINT,
  personality36 TINYINT,
  personality37 TINYINT,
  personality38 TINYINT,
  personality39 TINYINT,
  personality40 TINYINT,
  personality41 TINYINT,
  personality42 TINYINT,
  personality43 TINYINT,
  personality44 TINYINT,
  personality45 TINYINT,
  personality46 TINYINT,
  personality47 TINYINT,
  personality48 TINYINT,      
  personality49 TINYINT,
  personality50 TINYINT,
  personality51 TINYINT,
  personality52 TINYINT,
  personality53 TINYINT,
  personality54 TINYINT,
  personality55 TINYINT,
  personality56 TINYINT,
  personality57 TINYINT,
  personality58 TINYINT,
  personality59 TINYINT,
  personality60 TINYINT,
  personality61 TINYINT   
);
*/

/* 
CREATE TABLE PostConversation (
  ID Varchar(13) Primary Key,
  postConversation1 TINYINT,
  postConversation2 TINYINT,
  postConversation3 TINYINT,
  postConversation4 TINYINT,
  postConversation5 TINYINT
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
$demographics = array("Age", "Gender", "Education", "Major", "Income", "Occupation");
$postConversation = array("postConversation1", "postConversation2", "postConversation3", "postConversation4", "postConversation5");
$personality = [];
for ($i = 1; $i <= 61; $i++) {
  $personality[] = "personality" . $i;
}

$data = json_decode($_POST["data"], true);
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

$conn->close();
