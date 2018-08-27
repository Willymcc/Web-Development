 <html>

<link rel="stylesheet" type="text/css" href="Form.css">

<div class="newwrap">
<h1>Add Row<br></h1>

<body>
<head>



<form action="insertData.php" method="post" align="center">
Book Title:<br> 
<input type="text" name="title"><br>
Creator:<br>
<input type="text" name="creator"><br>
Type:<br>
<input type="text" name="type"><br>
Identifier:<br>
<input type="text" name="identifier"><br>
Date:<br>
<input type="date" size="60" name="date" id="date"><br>
Language:<br>
<input type="text" name="language"><br>
Description:<br>
<input type="text" name="description"><br>




<input type="submit">


</form>





<h2>Update Row</h2>
<form action="UpdateRow.php" method="post">
ID:<br>
<input type="text" name="id"><br>
Book Title:<br>
<input type="text" name="title"><br>
Creator:<br>
<input type="text" name="creator"><br>
Type:<br> 
<input type="text" name="type"><br>
Identifier:<br>
<input type="text" name="identifier"><br>
Date:<br>
<input type="date" size="60" name="date" id="date"><br>
Language:<br>
<input type="text" name="language"><br>
Description:<br>
<input type="text" name="description"><br>

<input type="submit">

</form>



<strong>Delete Row </strong>
<form action="DeleteRow.php" method="post">
ID:<br>
 <input type="text" placeholder="Enter I.D." name="id"><br>

<input type="submit">
</form>




<table border = "1">
<thead>
  <tr>
    <th class="ID">ID</th>
    <th class="Creator">Creator</th>
    <th class="Title">Title</th>
    <th class="Type">Type</th>
    <th class="Identifier">Identifier</th>
    <th class="Date">Date</th>
    <th class="Language">Language</th>
    <th class="Description">Descrip.</th>
  </tr>
</thead>



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




$sql = "SELECT * FROM eBook_MetaData";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    // output data of each row


    while($row = $result->fetch_assoc()) {
 echo' 
<tbody>
<tr> 

 <td> '.$row["ID"].'</td>
 <td> '.$row["Creator"].'</td>
 <td> '.$row["Title"].'</td>
 <td> '.$row["Type"].'</td>
 <td> '.$row["Identifier"].'</td>
 <td> '.$row["Date"].'</td>
 <td> '.$row["Language"].'</td>
 <td> '.$row["Description"]. '</td> </tr>';
  

    }

} 
else {
    echo "0 results";
}
$conn->close();


?>

</tbody>

</table>
</body>
</html> 
