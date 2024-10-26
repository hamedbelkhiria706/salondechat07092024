<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inscription</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="stylescss/global.css" />
    <link rel="stylesheet" href="stylescss/signup.css" />
  </head>
  <body>
    <!-- Navbar -->
    <!--   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
          <li class="nav-item">
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
    </nav>-->
    <div id="content"></div>
    <main class="mt-5 text-center">
      <div class="d-flex justify-content-between mb-4">
        <a href="login.html" class="nav-link">Se connecter</a>
        <a href="signup.html" class="nav-link active">S'inscrire</a>
      </div>

      <h1 class="mb-4">Nouveau sur le site ?</h1>
      <p>
        Créez un compte en quelques secondes et commencez à discuter
        immédiatement.
      </p>

      <div class="text-center mb-4">
        <div class="social-buttons">
          <img src="assets/google.png" alt="Google" class="mx-2" />
          <img src="assets/facebook.png" alt="Facebook" class="mx-2" />
          <img src="assets/github.png" alt="GitHub" class="mx-2" />
        </div>
        <p>OU</p>
      </div>

      <form>
        <div class="form-group">
          <label for="name">Nom :</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            required
            placeholder="Entrez votre nom"
          />
        </div>
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
        <div class="form-group">
          <label for="confirmPassword">Confirmez le mot de passe :</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            name="confirmPassword"
            required
            placeholder="Confirmez votre mot de passe"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="terms" required />
          <label class="form-check-label" for="terms"
            >J'accepte les T&C et la Politique de confidentialité</label
          >
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Créer un compte
        </button>
      </form>

      <div class="text-center mt-3">
        <p>
          Déjà un compte ?
          <a href="login.html" class="nav-link">Se connecter</a>
        </p>
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
    <script src="js/signup.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body>
</html>
