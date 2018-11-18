<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
<?php
$year = "";
$codde = "";
$number = "";
$semester = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $year = validate_input($_POST["year"]);
  $code = validate_input($_POST["code"]);
  $number = validate_input($_POST["number"]);
  $semester = validate_input($_POST["semester"]);
}

function validate_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>


<!-- <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">  
    Year: <input type="text" name="year">
    <br><br>
    Course Code: <input type="text" name="code">
    <br><br>
    Course Number: <input type="text" name="number">
    <br><br>
    Semester:
    <input type="radio" name="semester" value="summer">Summer
    <input type="radio" name="semester" value="fall">Fall
    <input type="radio" name="semester" value="spring" checked="checked">Spring
    <br><br>
    <input type="submit" name="submit" value="Submit">
</form> -->

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">  
    Year: <input type="text" name="year" value="2018">
    <br><br>
    Course Code: <input type="text" name="code" value="IAT">
    <br><br>
    Course Number: <input type="text" name="number" value="102">
    <br><br>
    Semester:
    <input type="radio" name="semester" value="summer">Summer
    <input type="radio" name="semester" value="fall">Fall
    <input type="radio" name="semester" value="spring" checked="checked">Spring
    <br><br>
    <input type="submit" name="submit" value="Submit">
</form>


<h2>Output Testing</h2>
<?php
echo $year . "<br />";
echo $semester . "<br />";
echo $code . "<br />";
echo $number . "<br />";
?>


 <?php
$url="http://www.sfu.ca/bin/wcm/course-outlines?".urlencode($year)."/".urlencode($semester)."/".urlencode($code)."/".$number."/d101";
$data =file_get_contents($url);
$characters= json_decode($data);
//var_dump($characters);
$info = $characters->info;
$title=$info->title;
$description=$info->description;
$prereq=$info->prerequisites;
// $description= $info->description;
// var_dump($info->title);
var_dump($info->prerequisites);
echo "<br />". $url . "<br />";
echo $title . "<br />";
echo $description . "<br />";
echo $prereq . "<br />";

?>

</body>
</html>