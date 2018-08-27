
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Assignment 3";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());


}

$id = $_POST["id"];
$creator = $_POST["creator"];
$title = $_POST["title"];
$type = $_POST["type"];
$identifier = $_POST["identifier"];
$date = $_POST["date"];
$language = $_POST["language"];
$description = $_POST["description"];

$sql = "UPDATE eBook_MetaData SET creator='$creator',title='$title',type='$type',identifier='$identifier',date='$date',language='$language',description='$description'
WHERE id = '$id'";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



header("location: Form.php ");


mysqli_close($conn);
?>
