<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Staff</title>
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/staff.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="/js/script.js"></script>
    <script type="module" src="/js/staff.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poetsen+One&family=Winky+Sans:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
    
</head>
<body>
    <?php include __DIR__ . "/../header.html"; ?>
    <main>
        <img class='background-plate' src="/01_Background/8_Staff.png" loading="lazy">
        <div class="scrollframe">
            <h1>Staff Credits</h1>
            <p class="credits staff"></p>
            <h1>Social Media Promotion Images</h1>
            <div class="gallery">
                <?php
                    $promos_Path = __DIR__ . "/../05_Staff_Assets/Social Media/";
                    $files = scandir($promos_Path);
                    foreach($files as $file) {
                        if($file !== "." && $file !== "..") {
                            $file = "/05_Staff_Assets/Social Media/" . $file;
                            echo "<img class=promo_image src='$file' />";
                        }
                    }
                ?>
            </div>
        </div>
    </main>
    <?php include __DIR__ . "/../footer.html"; ?>
</body>
</html>