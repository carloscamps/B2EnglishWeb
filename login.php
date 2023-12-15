<?php
session_start(); // Inicia la sessió o continua amb una existent.

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = $_POST['user'];
    $password = $_POST['password'];

    // Connectar a la base de dades SQLite
	$path_to_db = dirname(__FILE__) . '/db/B2EnglishWeb.db'; 	
    $pdo = new PDO('sqlite:' . $path_to_db);

    // Preparar la consulta
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$user]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Verificar la contrasenya
    if ($user && password_verify($password, $user['password'])) {
        // La contrasenya és correcta, redirigir a grammar.html
        $_SESSION['user_id'] = $user['id']; // Guardar dades d'usuari a la sessió
        header("Location: grammar.html");
        exit;
    } else {
        // La contrasenya no és correcta, mostrar un error o redirigir al formulari de login
        echo "Usuari o contrasenya incorrectes.";
    }
}
?>
