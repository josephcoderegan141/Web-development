
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
// -----------echo	"Connected	successfully----------";

///////////////////////////////////////////// user input for creating a customer using ajax inputs

$title = $conn->real_escape_string($_POST['title']);
$name = $conn->real_escape_string($_POST['name']);
$lname = $conn->real_escape_string($_POST['lname']);
$mobile = $conn->real_escape_string($_POST['mobile']);
$email = $conn->real_escape_string($_POST['email']);
$HomeAddress = $conn->real_escape_string($_POST['HomeAddress']);
$ShippingAddress = $conn->real_escape_string($_POST['ShippingAddress']);
$Town = $conn->real_escape_string($_POST['Town']);
$County = $conn->real_escape_string($_POST['County']);
$Eircode = $conn->real_escape_string($_POST['Eircode']);


if ($_SERVER['REQUEST_METHOD'] == 'POST') {  ///// checks that its only taking in post data (fro the vreate user method)

    if (isset($_POST['insert'])) {     ///////// checks if all pieces of information are present 
        if (isset($_POST['title'], $_POST['name'], $_POST['lname'], $_POST['mobile'], $_POST['email'], $_POST['HomeAddress'], $_POST['ShippingAddress'], $_POST['Town'], $_POST['County'], $_POST['Eircode'])) {
     
        } else {
            echo "Error: Not all insert data provided.";
        }
    } elseif (isset($_POST['search'])) {

        if (isset($_POST['firstNameSearch'], $_POST['lastNameSearch'])) { ///// for the search method checking for firstNameSearch and lastNameSearch
         
        } else {
            echo "NO SEARCH DATA!!!!!.";
        }
    } 
 
}


/////////////// SQL STATEMENT INSERTING DATA IN TO DATABASE 
$sql = "INSERT INTO CustomerList (Title,firstname, lastname, Mobile, email,HomeAddress,ShippingAddress,Town,County, Eircode)
VALUES ('$title','$name', '$lname', '$mobile','$email','$HomeAddress','$ShippingAddress','$Town','$County','$Eircode')";

if ($conn->query($sql) === TRUE) {
    echo "New customer created successfully--------";
} else {
  //  echo "Error: " . $sql . "<br>" . $conn->error;
}

