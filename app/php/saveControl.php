<?php

/* 
CREATE TABLE Control (
  ID Varchar(20) Primary Key,
  response TEXT
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

// construct sql query
$value = $data["Control"];
if (!empty($value)) {
  $value = $conn->real_escape_string($value);
} else {
  $value = "null";
}
$sql = "INSERT INTO Control VALUES ({$id}, '{$value}')";

// send query
if ($conn->query($sql) === TRUE) {
  echo "New control record created successfully \n";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
