// Récupérer les éléments liens
const textSizeLink = document.getElementById('text-size');
const contrastLink = document.getElementById('contrast');

// Ajouter les écouteurs d'événements aux liens
textSizeLink.addEventListener('click', adjustTextSize);
contrastLink.addEventListener('click', changeContrast);

// Fonction pour ajuster la taille du texte
function adjustTextSize(event) {
    event.preventDefault();
    
    // Demander à l'utilisateur la taille du texte souhaitée (vous pouvez utiliser une boîte de dialogue ou une autre méthode d'interaction)
    const textSize = prompt("Entrez la taille du texte souhaitée (en pixels) :");

    // Modifier la taille de police du contenu en utilisant la valeur saisie par l'utilisateur
    document.body.style.fontSize = textSize + "px";
}

// Fonction pour changer le contraste
function changeContrast(event) {
    event.preventDefault();
    // Ajouter ici le code pour modifier les styles de contraste selon les préférences de l'utilisateur
}
