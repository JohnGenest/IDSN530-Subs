<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "genest@usc.edu";
    $subject = "New contactsub";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    
    if (mail($to, $subject, $body)) {
        header("Location: index.php?status=success");
        exit();
    } else {
        header("Location: index.php?status=error");
        exit();
    }
}
?>