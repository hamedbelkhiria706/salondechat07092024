import sys
import os

def formater_texte(texte, mots_par_ligne):
    """Formate un texte en insérant des sauts de ligne après un nombre spécifié de mots."""
    mots = texte.split()
    lignes = []
    for i in range(0, len(mots), mots_par_ligne):
        ligne = " ".join(mots[i:i + mots_par_ligne])
        lignes.append(ligne)
    return "\n".join(lignes)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python script.py <mots_par_ligne> <chemin_fichier>")
        sys.exit(1)

    mots_par_ligne = int(sys.argv[1])
    chemin_fichier = sys.argv[2]

    try:
        with open(chemin_fichier, "r", encoding="utf-8") as fichier:
            texte = fichier.read()
    except FileNotFoundError:
        print(f"Erreur: Le fichier '{chemin_fichier}' n'a pas été trouvé.")
        sys.exit(1)

    texte_formate = formater_texte(texte, mots_par_ligne)
    lignes_formatees = texte_formate.splitlines()

    # Diviser en fichiers de 500 lignes
    nombre_fichiers = (len(lignes_formatees) + 499) // 500  # Arrondir au supérieur
    for i in range(nombre_fichiers):
        lignes_fichier = lignes_formatees[i * 500:(i + 1) * 500]
        nom_fichier_sortie = f"output{i + 1}.txt"
        try:
            with open(nom_fichier_sortie, "w", encoding="utf-8") as fichier_sortie:
                fichier_sortie.write("\n".join(lignes_fichier))
            print(f"Texte formaté et enregistré dans '{nom_fichier_sortie}'.")
        except Exception as e:
            print(f"Erreur lors de l'écriture du fichier '{nom_fichier_sortie}': {e}")