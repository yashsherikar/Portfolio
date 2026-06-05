<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Validate input
if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

$name = htmlspecialchars($_POST['name']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($_POST['subject'] ?? 'No Subject');
$message = htmlspecialchars($_POST['message']);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Set recipient email (change this to your email)
$to = "yashsherikar1821@gmail.com";
$headers = "From: $email" . "\r\n" .
           "Reply-To: $email" . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

// Send email
$mailSent = mail($to, $subject, $message, $headers);

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send message']);
}
?>