<?php

$flag = 'error_such_delicious_cookies';
$requireCount = 100;

$counter = 0;
foreach ($_COOKIE as $value) {
    $counter = $counter + 1;
}

if ($counter >= $requireCount) {
    echo 'Спасибо! flag: '.$flag;
}
else {
    echo 'Ты отправил мне '.$counter.'/'.$requireCount.' печенек!';
}
