
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
echo	"Connected	successfully----------";





//////////////////////////values recieved from ajax form(reference w3schools)
$mobile = $_POST['mobile'];
$firstName = $_POST['firstName'];
$town = $_POST['town'];
$county = $_POST['county'];

$query = "UPDATE CustomerList SET FirstName=?, Town=?, County=? WHERE Mobile=?";
$stmt = $conn->prepare($query);

if ($stmt === false) {
    die("Error preparing statement: " . $conn->error);
}


$stmt->bind_param("ssss", $firstName, $town, $county, $mobile);

// Attempt to execute the prepared statement
if ($stmt->execute()) {
    echo "Customer information updated successfully.";
} else {
    echo "Error updating customer information: " . $stmt->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
