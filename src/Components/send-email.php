<?php
require 'vendor/autoload.php'; // include the PHPMailer library

if($_SERVER["REQUEST_METHOD"]=="POST"){
  // Get the form data from the POST request
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Create a new PHPMailer instance
$mail = new PHPMailer\PHPMailer\PHPMailer();

// Set the mailer to use SMTP
$mail->isSMTP();

// Set the SMTP server details
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'ahmdshrkhnn@gmail.com'; // Replace with your Gmail username
$mail->Password = 'tbtoncewiumbbmox'; // Replace with your Gmail password
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// Set the email details
$mail->setFrom($email, $name);
$mail->addAddress('ahmdshrkhnn@gmail.com'); // Replace with the email address you want to send the message to
$mail->Subject = $subject;
$mail->Body = $message;

// Send the email
if ($mail->send()) {
  echo 'Email sent successfully!';
} else {
  echo 'Email sending failed.';
}
}

?>
