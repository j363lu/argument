<?php

/* 
CREATE TABLE InitialQuestions (
  ID Varchar(20) Primary Key,
  mturkID Varchar(20),
  economic TINYINT,
  social TINYINT,
  opinionDemocrats TINYINT,
  opinionRepublicans TINYINT,
  politicalScale TINYINT, 
  topicOpinion TINYINT,
  topicThought TINYINT
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
$initialQuestions = array("mturkID", "economic", "social", "opinionDemocrats", "opinionRepublicans", "politicalScale", "topicOpinion", "topicThought");
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
  echo "New initialQuestions record created successfully \n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
