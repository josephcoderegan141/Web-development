
<!-- WORKS IN FIREFOX AND MICROSOFT EDGE -->

<!-- //I used the XAMPP  DATABASE for this assignment, below is a ceate table sql query to initaly set up the table that will store all my data
// When this php file is run it will create the table and then create 2 users John and Mary(php page may need to reloaded if they arent created 
// the first time)
//THIS PHP PAGE DEMONSTRATES THE UNUPDATED DELETE AND UPDATE CUSTOMER FUNCTIONS 
//UPDATED SEARCH AND CREATE CUSTOMER (for front end) FUNCTIONS ARE IN THE OTHER LABLED PHP PAGES -->


<!-- sample code from lecture slides  -->


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


//////////////////////////////create table
$sql = "CREATE TABLE CustomerList (

	-- ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, #allows us to delete data straight from database very handy
	Title VARCHAR(6),
	firstname VARCHAR(30),
	lastname VARCHAR(30) ,
	Mobile VARCHAR(30) , #varchar to incliude the case of internation No.
	email VARCHAR(50),
	HomeAddress VARCHAR(50),
	ShippingAddress VARCHAR(50),
	Town VARCHAR(50),
	County VARCHAR(50),
	Eircode VARCHAR(50)
)";

if ($conn->query($sql) === TRUE) {
  echo "Table MyGuests created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}




//////////////// CRUD PHP FUNCTIONALITY (UPDATE AND DELETE)
////////////////insert data manually to table (FIRST SQL STATEMENT WILL BE UPDATED),(SECOND SQL STATEMENT WILL BE DELETED)

/////first customer(john) will be updated
$sql = "INSERT INTO CustomerList (Title,firstname, lastname, Mobile, email,HomeAddress,ShippingAddress,Town,County, Eircode)
VALUES ('Mr','John', 'Doe', '087323211','john@example.com','jacksonvile','Navan','Swords','Meath','AHDUWD90')";

if ($conn->query($sql) === TRUE) {
  echo "New customer created successfully--------";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
//////Second customer(mary) will be deleted 
$sql = "INSERT INTO CustomerList (Title,firstname, lastname, Mobile, email,HomeAddress,ShippingAddress,Town,County, Eircode)
VALUES ('Miss','Mary', 'Doe', '087323210','mary@example.com','jacksonvile','Navan','Swords','Meath','AHDUWD90')";

if ($conn->query($sql) === TRUE) {
	echo "New customer created successfully--------";
  } else {
	echo "Error: " . $sql . "<br>" . $conn->error;
  }




///////////////////// sql to delete a record based on there email, mobile and title
$sql = "DELETE FROM CustomerList WHERE email = 'mary@example.com' AND Mobile = '087323210' AND Title = 'Miss'";

if ($conn->query($sql) === TRUE) {
  echo "Customer info has been deleted-------------";
} else {
  echo "Error deleting customer info :(" . $conn->error;
}
////////////////// update a consumers information based on there email, mobile , first and last name
$sql = "UPDATE CustomerList SET lastname='Egan' WHERE email = 'john@example.com' AND Mobile = '087323211' AND firstname = 'John' AND  lastname='Doe'";

if ($conn->query($sql) === TRUE) {
  echo "Customer info has been updated!!-----------";
} else {
  echo "Error updating customer info :( " . $conn->error;
}



