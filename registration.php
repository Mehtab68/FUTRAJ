<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FUTRAJ</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
</head>

<body>

    <!-- navbar -->
    <nav class="navbar navbar-expand-md navbar-light bg-dark navbar-dark">
        <div class="container-xxl">
            <a href="index.html" class="navbar-brand">
                <span class="fw-bold text-secondary">
                    FUTRAJ
                </span>
            </a>
            <!-- toggle button for mobile-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
                aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <!-- search bar -->
            <input class="search2" type="text" method="put" id="search" placeholder="Search" value="">
            <input class="search1" type='submit' onclick="sendToPage();" />

            <!-- navbar links -->

            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.html"> Profit Calculator</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="players.html"> Card Creator</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="packprofit.html"> Champs Rank</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="marquee.html"> Marquee Predictions </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html"> About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="login.php"> Sign In</a>
                </li>


            </ul>



        </div>
    </nav>

    <!-- Background image -->
    <div style="background-color: grey; height: 100vh;">



        <div class="container">
            <?php
            if (isset($_POST["submit"])) {
                $fullName = $_POST["fullname"];
                $email = $_POST["email"];
                $password = $_POST["password"];
                $passwordRepeat = $_POST["repeat_password"];

                $passwordHash = password_hash($password, PASSWORD_DEFAULT);

                $errors = array();

                if (empty($fullName) or empty($email) or empty($password) or empty($passwordRepeat)) {
                    array_push($errors, "All fields are required");
                }
                if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    array_push($errors, "Email is not valid");
                }
                if (strlen($password) < 8) {
                    array_push($errors, "Password must be at least 8 charactes long");
                }
                if ($password !== $passwordRepeat) {
                    array_push($errors, "Password does not match");
                }
                require_once "database.php";
                $sql = "SELECT * FROM users WHERE email = '$email'";
                $result = mysqli_query($conn, $sql);
                $rowCount = mysqli_num_rows($result);
                if ($rowCount > 0) {
                    array_push($errors, "Email already exists!");
                }
                if (count($errors) > 0) {
                    foreach ($errors as $error) {
                        echo "<div class='alert alert-danger'>$error</div>";
                    }
                } else {

                    $sql = "INSERT INTO users (full_name, email, password) VALUES ( ?, ?, ? )";
                    $stmt = mysqli_stmt_init($conn);
                    $prepareStmt = mysqli_stmt_prepare($stmt, $sql);
                    if ($prepareStmt) {
                        mysqli_stmt_bind_param($stmt, "sss", $fullName, $email, $passwordHash);
                        mysqli_stmt_execute($stmt);
                        echo "<div class='alert alert-success'>You are registered successfully.</div>";
                    } else {
                        die("Something went wrong");
                    }
                }


            }
            ?>



            <form class="registerForm" action="registration.php" method="post">

                <h3> Login Here </h3>

                <label for="fullname">Full Name</label>
                <input type="text" class="loginInput" name="fullname" placeholder="Full Name:">

                <label for="email">Email</label>
                <input type="email" class="loginInput" name="email" placeholder="Email:">

                <label for="email">Password</label>
                <input type="password" class="loginInput" name="password" placeholder="Password:">

                <label for="email">Repeat Password</label>
                <input type="password" class="loginInput" name="repeat_password" placeholder="Repeat Password:">


                <input type="submit" class="registerButton" value="Register" name="submit">

            </form>

        </div>


    </div>




    <footer class="bg-dark text-white pt-5 pb-4 ">

        <div class="container text-center text-md-left">

            <div class="row text-center text-md-left">


                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">FUTRAJ</h5>
                    <p>Welcome to FUTRAJ! This is a place to feel more conected to the Ultimate Team Community & Improve
                        Your Ganme.</p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">

                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning"> Useful Links</h5>
                    <p>
                        <a href="index.html" class="text-white" style="text-decoration: none;"> Profit Calculator</a>
                    </p>
                    <p>
                        <a href="card.html" class="text-white" style="text-decoration: none;"> Card Creator</a>
                    </p>
                    <p>
                        <a href="tradingTips.html" class="text-white" style="text-decoration: none;"> Trading Tips </a>
                    </p>
                    <p>
                        <a href="about.html" class="text-white" style="text-decoration: none;"> About Us</a>
                    </p>
                </div>



                <div class="cold-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                    <p>
                        <i class="fas fa-home mr-3">CANADA</i>
                    </p>
                    <p>
                        <i class="fas fa-envelope mr-3">FUTRAJ@gmail.com</i>
                    </p>
                    <p>
                        <i class="fas fa-phone mr-3">+514 994 0583</i>
                    </p>
                    <p>
                        <i class="fas fa-print mr-3">Unknown</i>
                    </p>

                </div>

            </div>

            <hr class="mb-4">

            <div class="row align-items-center">

                <div class="col-md-7 col-lg-4">
                    <p>Copyright @2023 All rights reserved by:
                        <a href="#" style="text-decoration: none;">
                            <strong class="text-warning">FUTRAJ</strong>
                        </a>
                    </p>
                </div>
                <!-- <div class="col-md-5 col-lg-3"> 
                <div class="text-center text-md-right">
                    <ul class="list-unstyled list-incline">
                        <li class="list-incline-item">
                            <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li class="list-incline-item">
                            <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li class="list-incline-item">
                            <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-discord"></i></a>
                        </li>
                        <li class="list-incline-item">
                            <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-youtube"></i></a>
                        </li>
                        <li class="list-incline-item">
                            <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i class="fab fa-tiktok"></i></a>
                        </li>
                    </ul>
                </div> -->
            </div>
        </div>

        </div>

    </footer>

    <script src="main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</body>

</html>