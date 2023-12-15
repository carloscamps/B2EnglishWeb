<?php
session_start();
session_unset();
session_destroy();

// Redirigeix l'usuari a la pàgina d'inici
header('Location: home.html');
exit;
?>
