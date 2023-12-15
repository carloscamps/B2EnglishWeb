<?php
$registreExitos = false;
if (isset($_POST['submit'])) {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if ($password !== $confirm_password) {
        die("Les contrasenyes no coincideixen.");
    }

    // Connecta a la base de dades SQLite
	$path_to_db = dirname(__FILE__) . '/db/B2EnglishWeb.db';
    $db = new PDO('sqlite:' . $path_to_db);

    // Prepara la consulta SQL per a prevenir injeccions SQL
    $stmt = $db->prepare("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");

    // Encripta la contrasenya
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Executa la consulta
    $stmt->execute([$first_name, $last_name, $email, $hashed_password]);

    // Redirigeix a la pàgina de login o mostra un missatge    
	$registreExitos=true;
}


if ($registreExitos=true):
?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Registre Completat</title>
    <link rel="stylesheet" href="css/styles_registerphp.css">
</head>
<body>
    <div class="registration-success">
        <h1>Usuari registrat amb èxit!</h1>
        <p>Felicitats! El teu compte ha estat creat.</p>
        <a href="login.html" class="btn-login">Anar a la pàgina de login</a>
    </div>
</body>
</html>

<?php
exit; // Això és important per aturar l'execució de més codi PHP si ja has completat el procés.
endif;
?>

