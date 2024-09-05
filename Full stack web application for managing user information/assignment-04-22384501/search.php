
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


///////////////////////////////////////////////// Searching for customer (reference w3shools)

if (isset($_POST['firstNameSearch']) && isset($_POST['lastNameSearch'])) {
    $firstNameSearch = $_POST['firstNameSearch'];
    $lastNameSearch = $_POST['lastNameSearch'];

    $stmt = $conn->prepare("SELECT * FROM CustomerList WHERE firstname = ? AND lastname = ?");
    $stmt->bind_param("ss", $firstNameSearch, $lastNameSearch);


    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) { /// if searched user exists make table

        ////////////////// creating a table to present searched user data
        $output = "<table border='1'><tr><th>Title</th><th>First Name</th><th>Last Name</th><th>Mobile</th><th>Email</th><th>Home Address</th><th>Shipping Address</th><th>Town</th><th>County</th><th>Eircode</th></tr>";

       //////////////////   populates the table row with info from the database
        while ($row = $result->fetch_assoc()) {
            $output .= "<tr><td>" . htmlspecialchars($row["Title"]) . "</td><td>" . htmlspecialchars($row["firstname"]) . "</td><td>" . htmlspecialchars($row["lastname"]) . "</td><td>" . htmlspecialchars($row["Mobile"]) . "</td><td>" . htmlspecialchars($row["email"]) . "</td><td>" . htmlspecialchars($row["HomeAddress"]) . "</td><td>" . htmlspecialchars($row["ShippingAddress"]) . "</td><td>" . htmlspecialchars($row["Town"]) . "</td><td>" . htmlspecialchars($row["County"]) . "</td><td>" . htmlspecialchars($row["Eircode"]) . "</td></tr>";
        }

        
        $output .= "</table>";
    } else {
        $output = "No results found.";
    }


    $stmt->close();
    $conn->close();

 
    echo $output;
    exit;
}


