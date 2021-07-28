<?php
    if (!$_COOKIE["isAdmin"]) {
        setcookie("isAdmin", "0");
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="viewport" content="height=device-height">
    <title>Панель управления</title>
    <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <link href="./styles.css" rel="stylesheet">
    <link rel="SHORTCUT ICON" href="./" type="image/x-icon">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
</head>
<body>
    <div class="container">

        <?php
            if (isset($_POST["submit"])) {
                if ($_POST["username"] == "user" && $_POST["password"] == "qwert12345") {
                    if ($_COOKIE["isAdmin"]) {
                        echo   '<span class="login-title">You are logged in as admin</span><br>
                                <span class="login-title">Secret info: error_now_you_are_the_new_administrator</span><br>';
                    }
                    else {
                        echo   '<span class="login-title">You are logged in as user</span><br>
                                <span class="login-title">Some features may be unavailable</span><br>';
                    }
                    
                }
                else {
                    echo    '<h1 class="login-title">Log In</h1>
                            <form method="post" class="login-form">
                                <div class="form-group">
                                    <label>Login:</label>
                                    <input name="username" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label>Password:</label>
                                    <input name="password" type="password" class="form-control">
                                </div>
                                <input type="submit" name="submit" value="Log In" class="btn btn-default btn-block">
                                <span class="red">Incorrect Password or Login</span>
                            </form>';
                }
            }
            else {
                echo    '<h1 class="login-title">Log In</h1>
                        <form method="post" class="login-form">
                            <div class="form-group">
                                <label>Login:</label>
                                <input name="username" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Password:</label>
                                <input name="password" type="password" class="form-control">
                            </div>
                            <input type="submit" name="submit" value="Log In" class="btn btn-default btn-block">
                        </form>';
            }
        ?>

        
    </div>
</body>
</html>