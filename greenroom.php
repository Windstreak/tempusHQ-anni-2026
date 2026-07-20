<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greenroom</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/greenroom.css">
    <link rel="stylesheet" href="css/entry.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-csv@1.0.21/src/jquery.csv.min.js"></script>
    <script src="/js/script.js"></script>
    <script type="module" src="/js/greenroom.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poetsen+One&family=Winky+Sans:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
</head>
<body>
    <?php include "header.html"; ?>
    <main>
        <img class='background-plate' src="01_Background/4_Greenroom.png" loading="lazy">
        <div class="entries">
        </div>
        <?php include "entryOverlay.html"; ?>
    </main>
    <?php include "footer.html"; ?>
</body>
</html>