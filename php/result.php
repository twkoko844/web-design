<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<title>PHP test</title>
</head>
<body>
<?php
if (isset($_SESSION["user_name"])){
    echo "<p>ようこそ" . $_SESSION["user_name"] . "さん</p>";
}
else {
    echo "<p>fobbiden</p>";
}
?>
</body>
</html>