<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Connexion</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="stylescss/global.css" />
    <link rel="stylesheet" href="stylescss/login.css" />
  </head>
  <body>
    <!-- Navbar -->
    <div id="content"></div>
    <!--<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">AppChat</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Accueil</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="chat.html">Chat</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn btn-primary text-white" href="login.html"
              >Inscription</a
            >
          </li>
        </ul>
      </div>
    </nav>
  -->
    <main class="mt-5 text-center">
      <div class="d-flex justify-content-between mb-4">
        <a href="login.html" class="nav-link active">Se connecter</a>
        <a href="signup.html" class="nav-link">S'inscrire</a>
      </div>

      <h1 class="mb-4">Se connecter à notre site</h1>
      <p>Déjà membre ? Connectez-vous pour commencer à discuter.</p>

      <div class="text-center social-buttons mb-4">
        <img src="assets/google.png" alt="Google" class="mx-2" />
        <img src="assets/facebook.png" alt="Facebook" class="mx-2" />
        <img src="assets/github.png" alt="GitHub" class="mx-2" />
      </div>
      <p class="text-center">OU</p>

      <form>
        <div class="form-group">
          <label for="email">Email :</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            required
            placeholder="Entrez votre email"
          />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe :</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            required
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="rememberMe" />
          <label class="form-check-label" for="rememberMe"
            >Se souvenir de moi</label
          >
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Se connecter
        </button>
      </form>
      <div class="text-center mt-3">
        <a href="#">Mot de passe oublié ?</a>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white mt-5 p-4 text-center">
      <p>
        &copy; 2024 Application de Chat en Temps Réel | Tous droits réservés.
      </p>
      <p>
        <a href="politique.html" class="text-white"
          >Politique de confidentialité</a
        >
        | <a href="mentions.html" class="text-white">Mentions légales</a> |
        <a href="about.html" class="text-white">Contactez-nous</a>
      </p>
    </footer>

    <script
      src="https://code.jquery.com/jquery-3.7.1.js"
      integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
      crossorigin="anonymous"
    ></script>
    <script src="js/login.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body>
</html>
