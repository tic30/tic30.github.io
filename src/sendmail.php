<!DOCTYPE html>
<html>
<head>
<title>Chu's Homepage-Message</title>
	<link rel="stylesheet" href="../css/bootstrap.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="../css/style.css" type="text/css">
</head>
<body>
<nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <a class="navbar-brand page-scroll" href="../index.html">Tianxin Chu's Homepage</a>
            </div>
        </div>
        <!-- /.container-fluid -->
    </nav>
    
    <section>
    <div class="container">
            <div class="row">
	<?php
	$senderName = strip_tags($_POST["senderName"]);
	$senderEmail = strip_tags($_POST["email"]);
	
	if($senderName=='' && $senderEmail==''){
		echo'<br/><div class="panel panel-danger">
      			<div class="panel-heading">'."Error".'</div>
      			<div class="panel-body">'.'No information entered. Please click <span style="color:blue; cursor:pointer" onClick="history.go(-1)">HERE</span> to go back.'.
			 '</div></div>';
	}
	else{
  // Set path for the PHPMailer files.  These must have been previously
  // unzipped and placed into the stated directory.  Be sure to match
  // up the directories in your installation (i.e. you do not have to have
  // your files in the same directory that I have here, as long as you can
  // locate them).  To download / install the necessary files, see:
  // https://github.com/Synchro/PHPMailer
  $mailpath = 'D:\XAMPP\htdocs\PHPMailer-master';
  
  // Also note that Windows installations have different path names - be sure
  // to follow the syntax correctly.
  // Also, on my Windows version, to get this to work I had to do the following:
  // 	Edit file 'php.ini'  (you need to find where that is)
  //	Locate the line:  extension=php_openssl.dll
  //	If there is a semicolon (;) at the beginning of the line, delete it
  //	Save the file
  //	Start / restart Apache
  
  // Extra path for my id and password files (so I don't have to show them
  // in this handout)
  $incpath = '/Applications/XAMPP/xamppfiles/data';
  // Add the new path items to the previous PHP path
  $path = get_include_path();
  set_include_path($path . PATH_SEPARATOR . $mailpath . PATH_SEPARATOR . $incpath);
  require 'PHPMailerAutoload.php';
  //include 'data.php';
  
  // PHPMailer is a class -- we will discuss classes and PHP object-oriented
  // programming soon.  However, you should be able to copy / use this
  // technique without fully understanding PHP OOP.
  $mail = new PHPMailer();
 
  $mail->IsSMTP(); // telling the class to use SMTP
  $mail->SMTPAuth = true; // enable SMTP authentication
  $mail->SMTPSecure = "tls"; // sets tls authentication
  $mail->Host = "smtp.pitt.edu"; // sets Pitt as the SMTP server
  $mail->Port = 587; // set the SMTP port for the Pitt server
  $mail->Username = "tic30"; // Pitt username
  $mail->Password = "ctxscmm@1013"; // Pitt password

  
  $sender = strip_tags("tic30@pitt.edu");
  $receiver = strip_tags("tic30@pitt.edu");
  //$subj = strip_tags("Contact form sent from my homepage");
  $msg = strip_tags($senderEmail."\n".$_POST["subject"]."\n".$_POST["message"]);

  // Put information into the message
  $mail->addAddress($receiver);
  $mail->SetFrom($sender);
  $mail->Subject = "Contact form sent from my homepage";
  $mail->Body = "Contact from $senderName"."\n"."$msg";

  // echo 'Everything ok so far' . var_dump($mail);
  if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
   } 
   else { echo '<div class="panel panel-success">
      			<div class="panel-heading">Success</div>
      			<div class="panel-body">Thank you! Your message has been sent and I will get back to you ASAP!</div></div>'; 
		}

	
	//Startring to store user info into a MySQL table
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "mysql";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
    	die("Error: MySQL Connection failed: " . $conn->connect_error);
	} 

	// sql to create table
	$sql = "CREATE TABLE People (
	sender_name VARCHAR(100) NOT NULL,
	sender_email VARCHAR(100) NOT NULL)";
	//CONSTRAINT c1 check(DATALENGTH(fname) >= 2 and DATALENGTH(lname) >= 2 )

	if ($conn->query($sql) === TRUE) {
    	echo '<div class="panel panel-success">
      			<div class="panel-heading">'."Success".'</div>
      			<div class="panel-body">'.'Table "People" created successfully'.'</div>
			  </div>';
	} else {
    	echo '<div class="panel panel-warning">
      			<div class="panel-heading">'."When creating table...".'</div>
      			<div class="panel-body">'.$conn->error.'</div>
			  </div>';
	}

	//display
	$wholeTable = "SELECT * FROM People";
	$result1=$conn->query($wholeTable);

	if ($result1->num_rows > 0) {
    	// output data of each row
		echo '<table class="table table-striped"><thead><tr>';
		echo '<th>'."Sender Name".'</th>'.'<th>'."Email"."</th></tr></thead><tbody>";
    	while($row = $result1->fetch_assoc()) {
        	echo '<tr><td>'.$row["sender_name"]. '</td>'.'<td>' . $row["sender_email"]. "</td></tr>";
    	}
		echo '</tbody></table>';
	} else {
    	echo 'Table "People" is currently empty';
	}
	
	//$sender_name1 = $_POST["sender_name"];
	//$lname1 = $_POST["lname"];
	
	$userQuery = "SELECT * FROM People
					WHERE sender_name='$senderName' and sender_email='$senderEmail'";
	$result2=$conn->query($userQuery);
	if((!isset($senderName)) && (!isset($senderEmail))){
		echo'<br/><div class="panel panel-danger">
      			<div class="panel-heading">'."Error".'</div>
      			<div class="panel-body">'."No information entered.".
			 '</div></div>';
	}
	else{ 
		if ($result2->num_rows > 0) {
    	// output data of each row
		echo '<br/><div class="panel panel-success">
      			<div class="panel-heading">'."Welcome back, $senderName...".'</div>
      			<div class="panel-body">'."Thank you for contacting me again! I will get back to you ASAP!".
			 '</div></div>';
		}else {
    		$enter = "INSERT INTO People (sender_name, sender_email)
VALUES ('$senderName', '$senderEmail')";
			$result3=$conn->query($enter);
			if ($result3 === TRUE) {
    		echo '<br/><div class="panel panel-success">
      				<div class="panel-heading">'."Success".'</div>
      				<div class="panel-body">'."Contact infomation recorded successfully in database.".
				 '</div></div>';
			}else {
    		echo '<div class="panel panel-danger">
      			<div class="panel-heading">'."Error recording contact info.".'</div>
      			<div class="panel-body">'.$conn->error.'</div>
			  </div>';
			}
		}
	}
	$conn->close();
	}
	?>
	</div>
	</div>
	</section>
    
</body>
</html>