<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Cipher</title>
    <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
</head>
<style>
    * {
        font-size: x-large;
    }
</style>
<body>
<?php
    function Encrypt($t, $g) {
        $s = $t ^ $g;
        return bin2hex($s);
    }

    $d = rand(1, 2562055681); 
    $gamma = 'heymanhowareyouheymanhowareyouheymanhowareyouheymanhowareyouheymanhowareyouheymanhowareyouheymanhowareyouheymanhowareyouheymanhowareyouheymanhowareyouheymanhowareyouheymanhowareyouheymanhowareyouheymanhowareyouheymanhowareyou';
    $code = Encrypt('cryptography_is_my_hobby', $gamma);
    $flag = 'error_xor_1s_the_best_crypt0_method';

    if(isset($_POST['code'])) {
        if ($_POST['code'] == $code) {
            echo   '<span>Welcome!</span><br><br>
                    <span>Random date: '.date('l jS \of F Y', $d).'</span><br>
                    <span>Encrypted date: '.Encrypt(date('l jS \of F Y', $d), $gamma).'</span><br><br>
                    <span>If u want to get flag, input here encoded data: <b>cryptography_is_my_hobby</b></span><br><br>
                    <form method="post">
                        <input id="code" name="code">
                        <button type="submit">send</button>
                    </form><br>
                    <span>'.$flag.'</span>';
        }

        else if (!empty($_POST['code'])){
            echo   '<span>Welcome!</span><br><br>
                    <span>Random date: '.date('l jS \of F Y', $d).'</span><br>
                    <span>Encrypted date: '.Encrypt(date('l jS \of F Y', $d), $gamma).'</span><br><br>
                    <span>If u want to get flag, input here encoded data: <b>cryptography_is_my_hobby</b></span><br><br>
                    <form method="post">
                        <input id="code" name="code">
                        <button type="submit">send</button>
                    </form><br>';
        }  
        else {
            echo   '<span>Welcome!</span><br><br>
                    <span>Random date: '.date('l jS \of F Y', $d).'</span><br>
                    <span>Encrypted date: '.Encrypt(date('l jS \of F Y', $d), $gamma).'</span><br><br>
                    <span>If u want to get flag, input here encoded data: <b>cryptography_is_my_hobby</b></span><br><br>
                    <form method="post">
                        <input id="code" name="code">
                        <button type="submit">send</button>
                    </form><br>
                    <span>WRONG</span>';
        }      
    }
    else {
        echo   '<span>Welcome!</span><br><br>
                    <span>Random date: '.date('l jS \of F Y', $d).'</span><br>
                    <span>Encrypted date: '.Encrypt(date('l jS \of F Y', $d), $gamma).'</span><br><br>
                    <span>If u want to get flag, input here encoded data: <b>cryptography_is_my_hobby</b></span><br><br>
                    <form method="post">
                        <input id="code" name="code">
                        <button type="submit">send</button>
                    </form><br>';
    }
?>
</body>