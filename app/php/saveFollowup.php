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

define("SERVER", "localhost");
define("USERNAME", "dicelab");
define("PASSWORD", "56YI1gYf2hgM2lBA");
define("DATABASE", "argument");

// Connect to mysql
$conn = new mysqli(SERVER, USERNAME, PASSWORD, DATABASE);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Database connected successfully \n";

// get data
$demographics = array("Age", "Gender", "Education", "Major", "Income", "Occupation");
$data = json_decode($_POST["data"], true);
$id = !empty($_POST["id"]) ? $_POST["id"] : "null";
$startTime = !empty($_POST["startTime"]) ? $_POST["startTime"] : "null";
$endTime = !empty($_POST["endTime"]) ? $_POST["endTime"] : "null";
$completionCode = !empty($_POST["completionCode"]) ? $_POST["completionCode"] : "null";

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
$sql = "INSERT INTO Metadata VALUES ({$id},'{$startTime}','{$endTime}','{$completionCode}', {$bonus})";

// send sql query
if ($conn->query($sql) === TRUE) {
  echo "New Metadata record created successfully \n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
