<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="viewport" content="height=device-height">
    <title>SuperUltraSecurityBankDataBase</title>
    <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <link href="./styles.css" rel="stylesheet">
    <link rel="SHORTCUT ICON" href="./assets/ficus-icon.png" type="image/x-icon">
    <script src="user.js"></script>
    <script src="./main.js" type="application/javascript"></script>
</head>
<body>
    <h1>Доступ к БД Security банка</h1>
    <form method="POST">
        <input class="sqlname" type="text" name="sqlname" placeholder="Введите имя человека">
        <input type="submit" value="Поиск" name="poisk">
    </form>
</body>
<html>
<?php
    if(isset($_POST['poisk'])) {
        $link = mysqli_connect("localhost", "wizzard1_sql", "C020903c!", "wizzard1_sql");
        if(!$link) print('error');
        mysqli_set_charset($link, "utf8");
        $name = $_POST['sqlname'];
        $sql = "SELECT * FROM `businessmen` WHERE `name`='".$name."'";
        $result = mysqli_query($link, $sql);
        print("Найдено ".mysqli_num_rows($result)." записей<br>");

        while($row = mysqli_fetch_array($result)) {
            print('<br>'.
                $row['name'].' '.$row['lastname'].' '.$row['surname'].' &middot '.$row['card']);
        }
    }
?>
