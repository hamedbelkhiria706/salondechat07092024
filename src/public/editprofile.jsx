<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Modifier le Profil</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
  </head>
  <body>
    <script
      src="https://code.jquery.com/jquery-3.7.1.js"
      integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
      crossorigin="anonymous"
    ></script>

    <div id="content"></div>

    <div class="container mt-5">
      <h1 class="text-center">Modifier le Profil</h1>

      <div class="row mt-4">
        <div class="col-12 col-md-8 offset-md-2">
          <form>
            <div class="form-group">
              <label for="firstName">Prénom</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="Entrez votre prénom"
              />
            </div>

            <div class="form-group">
              <label for="lastName">Nom de Famille</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder="Entrez votre nom de famille"
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Entrez votre adresse email"
              />
            </div>

            <div class="form-group">
              <label for="bio">Bio</label>
              <textarea
                class="form-control"
                id="bio"
                rows="3"
                placeholder="Parlez-nous de vous-même"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block">
              Enregistrer les Modifications
            </button>
          </form>
        </div>
      </div>
    </div>

    <script src="js/editprofile.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body>
</html>
