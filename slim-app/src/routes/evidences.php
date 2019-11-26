<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

$app->get('/api/{entity}', function (Request $request, Response $response, $args) {
    $apiToTables = [
        "evidences" => "evidences",
        "requests" => "requests",
        "messages" => "sms"
    ];
    $entity = $args['entity'];
    $sql = "SELECT * FROM " . $apiToTables[$entity];

    try {

        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        return $response->withJSON($result);
    } catch (PDOEception $e) {
        echo '{"error": {"text": ' . $e->getMessage() . '}';
    }
});
