<?php
session_start();

// エラーメッセージを格納する変数を初期化
$error_message = "";

// ログインボタンが押されたかを判定
// 初めてのアクセスでは認証は行わずエラーメッセージは表示しないように
if (isset($_POST["login"])) {

// user_nameが「user」でpasswordが「password」だとログイン出来るようになっている
if ($_POST["user_name"] == "user" && $_POST["password"] == "password") {

// ログインが成功した証をセッションに保存
$_SESSION["user_name"] = $_POST["user_name"];

// 管理者専用画面へリダイレクト
$login_url = "http://{$_SERVER["HTTP_HOST"]}/php/result.php";
header("Location: {$login_url}");
exit;
}
$error_message = "ユーザ名もしくはパスワードが違っています。";
}
?>

<html>
<head>
<meta charset="UTF-8">
<title>ログイン画面</title>
</head>
<body>
<?php
if ($error_message) {
    print '<font color="red">'.$error_message.'</font>';
}
?>
<form action="login.php" method="POST">
ユーザ名：<input type="text" name="user_name" value="" /><br />
パスワード：<input type="password" name="password" value"" /><br />
<input type="submit" name="login" value="ログイン" />
</form>
</body>
</html>