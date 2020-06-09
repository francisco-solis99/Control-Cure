<?php 

    $recipient = 'exampledafirenze08@gmail.com';
    $email = $_POST['mail'];
    $message = $_POST['message'];

    $header = 'Send from ControlCure site ' . "\r\n" . "Reply-To: " . $email .  "\r\n" .  "X-Mailer: PHP/" . phpversion();
    
    $mail = mail($recipient, 'FEEDBACK', $message, $header);

    if($mail){
        echo "<script>
        alert('Correo enviado')
    </script>";

        echo "<script> 
                setTimeout(\"location.href='../index.html'\", 1000)
            </script>";
    }
    else{
        echo "ERROR";
    }

  

 ?> 