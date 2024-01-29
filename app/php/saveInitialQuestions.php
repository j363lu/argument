<?php

/* 
CREATE TABLE InitialQuestions (
  ID Varchar(13) Primary Key,
  initial1 TINYINT,
  initial2 TINYINT,
  initial3 TINYINT,
  initial4 TINYINT,
  initial5 TINYINT
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
$initialQuestions = array("initial1", "initial2", "initial3", "initial4", "initial5");
$data = json_decode($_POST["data"], true);
$id = !empty($_POST["id"]) ? $_POST["id"] : "null";

// construct sql query
$sql = "INSERT INTO InitialQuestions VALUES ({$id}";
foreach ($initialQuestions as $column) {
  $value = $data[$column];
  if (isset($value) && gettype($value) === "integer") {
    $sql = "{$sql},{$value}";
  } elseif (isset($value) && gettype($value) === "double") {
    $sql = "{$sql},{$value}";
  } elseif (!empty($value) && gettype($value) === "string") {
    $value = $conn->real_escape_string($value);
    $sql = "{$sql},'{$value}'";
  } else {
    $sql = "{$sql},null";
  }
}
$sql = $sql . ")";

// send query
if ($conn->query($sql) === TRUE) {
  echo "New task record created successfully \n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
