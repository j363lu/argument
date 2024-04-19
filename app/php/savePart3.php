<?php

/* 
CREATE TABLE Part3 (
  ID Varchar(20) Primary Key,
  CompletionCode Varchar(25),
  attitude TINYINT
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
$data = json_decode($_POST["data"], true);
$id = !empty($_POST["id"]) ? $_POST["id"] : "null";
$completionCode = !empty($_POST["completionCode"]) ? $_POST["completionCode"] : "null";

$part3 = array("attitude");

// construct sql query
$sql = "INSERT INTO Part3 VALUES ({$id},'{$completionCode}'";
foreach ($part3 as $column) {
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

// send query
if ($conn->query($sql) === TRUE) {
  echo "New part3 record created successfully \n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
