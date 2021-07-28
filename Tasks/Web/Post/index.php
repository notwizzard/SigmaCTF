<?php

$flag = 'error_parcel_sent_successfully';

if (!empty($_POST)) {
    if ($_POST['action'] == 'flag' && $_POST['code'] == '117') {
        echo 'Молодец! flag: '.$flag;
    }
    else {
        echo 'Сервер выдает флаг на POST запрос с полями "action"=="flag" и "code"=="117", ты отправил неправильный запрос!';
    }
}
else {
    echo 'Сервер выдает флаг на POST запрос с полями "action"=="flag" и "code"=="117"';
}