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
// initialize the parameters 
$codde = "";


// form handling and validating 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $code = validate_input($_POST["code"]);
}

// validating function
function validate_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">  
<select>
<?php
$base_url="http://www.sfu.ca/bin/wcm/course-outlines";
$data=file_get_contents($base_url);
$json_data=json_decode($data);
$dataLength=count($json_data);
var_dump($dataLength);

for($i = 0; $i< $dataLength ; $i++){
    $value= $json_data[$i]->value;
    echo $value . "<br />";
    echo "<option value=".$value.">".$value."</option>";
}
?>
</select><br/>

 Semester:
    <input type="radio" name="semester" value="summer">Summer
    <input type="radio" name="semester" value="fall">Fall
    <input type="radio" name="semester" value="spring" checked="checked">Spring
    
<br /><select>
<option value="iat">IAT</option>
</select><br/>

<select name="code">
<?php
$base_url="http://www.sfu.ca/bin/wcm/course-outlines?2018/summer/iat";
$data=file_get_contents($base_url);
$json_data=json_decode($data);
$dataLength=count($json_data);
var_dump($dataLength);

for($i = 0; $i< $dataLength ; $i++){
    $value= $json_data[$i]->text;
    echo $value . "<br />";
    echo "<option value=".$value.">".$value."</option>";
}
?>

</select><br/>
<br />
<input type="submit" name="submit" value="Submit">
</form>

<?php
// SFU API Database url
$url="http://www.sfu.ca/bin/wcm/course-outlines?2018/summer/iat"."/".urlencode($code)."/d100";
// fetch content 
$data =file_get_contents($url);
// the raw json data
$characters= json_decode($data);
$err="course information not avaiable";
$title="";
$description="";
$prereq="";
$name="";


if(isset($characters->info)){
// object name 
$info = $characters->info;
$instructor=$characters->instructor;
// information
$title=$info->title;
$description=$info->description;
$prereq=$info->prerequisites;
$name=$instructor[0]->name;
}else{
echo $err;
}


// $description= $info->description;
// var_dump($info->title);
echo $title . "<br />";
echo $description . "<br />";
echo $prereq . "<br />";
echo $name . "<br />";
?>

</body>
</html>