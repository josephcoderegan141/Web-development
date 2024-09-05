
<!-- WORKS IN FIREFOX AND MICROSOFT EDGE -->

<?php
$servername	=	"localhost";
$username	=	"USERS";
$password	=	"jabra123";
$dbname	=	"users";

//	Create connection to apache webserver
$conn	=	mysqli_connect($servername,	$username,$password,$dbname);
//	Check connection to apache webserever 
if	(!$conn)	{
				die("Connection	failed:	"	.	mysqli_connect_error());
}
// echo	"Connected	successfully----------";


//////////////////////////// Retrieve data from ajax

$email = $conn->real_escape_string($_POST['email']);
$phone = $conn->real_escape_string($_POST['phone']);
$FirstName = $conn->real_escape_string($_POST['name']);

/////////////////////////// SQL query to delete a record
$sql = "DELETE FROM CustomerList WHERE email = '$email' AND Mobile = '$phone' AND FirstName = '$FirstName'";

if ($conn->query($sql) === TRUE) {
    echo "customer deleted successfully";
} else {
    echo "Error deleting customer " . $conn->error;
}

$conn->close();