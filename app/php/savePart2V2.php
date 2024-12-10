<?php

/* 
CREATE TABLE Part2 (
  ID Varchar(20) Primary Key,
  CompletionCodePart2 Varchar(25),
  TopicPart2 Varchar(20),
  StartTimeTorontoPart2 Timestamp,
  EndTimeTorontoPart2 Timestamp DEFAULT CURRENT_TIMESTAMP,

  mturkIDPart2 Varchar(20),
  topicOpinionPart2 TINYINT,
  rememberVividly TINYINT,
  rememberClearly TINYINT,
  likeYesterday TINYINT,
  likeIWereThere TINYINT,
  makeFilm TINYINT,
  occurDifferently TINYINT,
  doubtful TINYINT,
  occurExactly TINYINT,
  notFabricated TINYINT,
  sure TINYINT,
  haveToSearch TINYINT,
  haveToThink TINYINT,
  notRecallOften TINYINT,
  comeBackDisjointedPieces TINYINT,
  comeBackDisjointedFlashbacks TINYINT,
  thereAreGaps TINYINT,
  incoherentOrder TINYINT,
  chronologicalOrder TINYINT,
  feelingsWeak TINYINT,
  feelingsIntense TINYINT,
  evokesWeakEmotions TINYINT,
  feelIntenseEmotions TINYINT,
  evokesStrongEmotions TINYINT,
  topicOpinionPart1Before TINYINT,
  topicOpinionPart1After TINYINT,
  argumentPart1 TEXT,
  economicPart2 TINYINT,
  socialPart2 TINYINT,
  politicalScalePart2 TINYINT,
  viewOnAI TINYINT
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
$part2 = array("mturkIDPart2", "topicOpinionPart2", "rememberVividly", "rememberClearly", "likeYesterday", "likeIWereThere", "makeFilm", "occurDifferently", "doubtful", "occurExactly", "notFabricated", "sure", "haveToSearch", "haveToThink", "notRecallOften", "comeBackDisjointedPieces", "comeBackDisjointedFlashbacks", "thereAreGaps", "incoherentOrder", "chronologicalOrder", "feelingsWeak", "feelingsIntense", "evokesWeakEmotions", "feelIntenseEmotions", "evokesStrongEmotions", "topicOpinionPart1Before", "topicOpinionPart1After", "argumentPart1", "economicPart2", "socialPart2", "politicalScalePart2", "viewOnAI");

$data = json_decode($_POST["data"], true);
$id = !empty($_POST["id"]) ? $_POST["id"] : "null";
$startTime = !empty($_POST["startTime"]) ? $_POST["startTime"] : "null";
$endTime = !empty($_POST["endTime"]) ? $_POST["endTime"] : "null";
$completionCode = !empty($_POST["completionCode"]) ? $_POST["completionCode"] : "null";
$topic = !empty($_POST["topic"]) ? $_POST["topic"] : "null";


/*********************** Part2 ***********************/
// construct sql query
$sql = "INSERT INTO Part2 VALUES ({$id},'{$completionCode}','{$topic}','{$startTime}','{$endTime}'";
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

$conn->close();
