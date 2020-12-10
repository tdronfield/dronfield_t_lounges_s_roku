<?php
// this is going to act as a catch-all file

    // import other modules to use 
    include("connect.php");
    include("functions.php");

    if(isset($_GET["id"])) {
        // get one item from the database based on what was clicked
        // asked for in the UI
        $targetID = $_GET["id"];
        $result = getSingleUser($pdo, $targetID);

        return $result;
    } else {
        // user must want to see all items in the database
        $allUsers = getAllUsers($pdo);

        return $allUsers;
    }

    if(empty($_POST["email"])) {
        header('HTTP/1.1 488 You Did NOT Include Your Email');
        die(json_encode(["message" => "form submission failed"]));
        
    } else {
        echo json_encode(["message" => "this is a test message. Your name is " . $_POST["firstname"] ." and your email is " . $_POST["email"]]);
    }