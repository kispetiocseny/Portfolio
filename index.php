<?php
session_start();

// CAPTCHA generálása és mentése a session változóba
if (!isset($_SESSION['captcha'])) {
    $num1 = rand(1, 10);
    $num2 = rand(1, 10);
    $_SESSION['captcha'] = $num1 + $num2;
}

// Űrlap beküldésének ellenőrzése
if (isset($_POST['submit'])) {
    // CAPTCHA ellenőrzése
    if ($_POST['captcha'] == $_SESSION['captcha']) {
        // A CAPTCHA helyes
        $to = 'kispeter9315@gmail.com';
        $subject = 'Új üzenet érkezett a weboldalról';

        $name = $_POST['name'];
        $email = $_POST['email'];
        $number = $_POST['number'];
        $message = $_POST['message'];

        $headers = "From: $name <$email>" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";

        $mailBody = "Név: $name\nE-mail: $email\nTelefonszám: $number\n\nÜzenet:\n$message";

        if (mail($to, $subject, $mailBody, $headers)) {
            echo "Az üzenet sikeresen elküldve!";
        } else {
            echo "Hiba történt az üzenet elküldése közben.";
        }
    } else {
        // A CAPTCHA helytelen
        echo "Kérlek, add meg a helyes választ a CAPTCHA-hoz!";
    }
}
?>