<?php 
require_once 'connection.php';
$pdoConn = new Connection;
$stmt = $pdoConn->prepare('SELECT UPPER(name) as name,description FROM phone_desc');
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($result));
$stmt->closeCursor();
?>