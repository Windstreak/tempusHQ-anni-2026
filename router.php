<?php
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$routes = [
    '/' => __DIR__ . '/api/index.php',
    '/altare' => __DIR__ . '/api/altare.php',
    '/axel' => __DIR__ . '/api/axel.php',
    '/greenroom' => __DIR__ . '/api/greenroom.php',
    '/hallway' => __DIR__ . '/api/hallway.php',
    '/lobby' => __DIR__ . '/api/lobby.php',
    '/staff' => __DIR__ . '/api/staff.php',
    '/stage' => __DIR__ . '/api/stage.php',
];

if (isset($routes[$uri])) {
    require $routes[$uri];
    return true;
}

$filePath = __DIR__ . rawurldecode($uri);
if ($uri !== '/' && is_file($filePath)) {
    return false;
}

http_response_code(404);
echo '404 Not Found';
