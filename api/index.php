<?php
echo "<h1>Debug Info</h1>";
echo "<h2>PHP Version: " . phpversion() . "</h2>";
echo "<h2>Server Software: " . ($_SERVER['SERVER_SOFTWARE'] ?? 'N/A') . "</h2>";
echo "<h2>REQUEST_URI: " . ($_SERVER['REQUEST_URI'] ?? 'N/A') . "</h2>";
echo "<h2>SCRIPT_FILENAME: " . ($_SERVER['SCRIPT_FILENAME'] ?? 'N/A') . "</h2>";
echo "<h2>DOCUMENT_ROOT: " . ($_SERVER['DOCUMENT_ROOT'] ?? 'N/A') . "</h2>";
echo "<h2>PHP_SELF: " . ($_SERVER['PHP_SELF'] ?? 'N/A') . "</h2>";

echo "<h2>__DIR__: " . __DIR__ . "</h2>";
echo "<h2>Files in __DIR__:</h2>";
echo "<pre>";
print_r(scandir(__DIR__));
echo "</pre>";

echo "<h2>Files in __DIR__/..:</h2>";
echo "<pre>";
print_r(scandir(__DIR__ . "/.."));
echo "</pre>";

echo "<h2>phpinfo()</h2>";
phpinfo();
