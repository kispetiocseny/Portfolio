<?php
if (isset($_POST['submit'])) {
    // Az űrlap adatainak begyűjtése
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Ellenőrzés: captcha
    $captcha = $_POST['captcha'];
    $captchaNumber = rand(1000, 9999); // Véletlenszerűen generált szám

    if ($captcha !== $captchaNumber) {
        echo "A captcha száma helytelen.";
        exit;
    }

    // E-mail küldése
    $to = 'kispeter9315@gmail.com'; // Az e-mail címed, ahova az üzenetet küldeni szeretnéd
    $subject = 'Új üzenet érkezett: ' . $subject;
    $message = "Név: $name\n";
    $message .= "E-mail: $email\n";
    $message .= "Telefonszám: $number\n\n";
    $message .= "Üzenet:\n$message";

    $headers = "From: $name <$email>";

    if (mail($to, $subject, $message, $headers)) {
        echo "Az üzenetet elküldtük.";
    } else {
        echo "Hiba történt az üzenet küldése közben.";
    }
}
?>
