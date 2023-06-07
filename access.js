// -------------------------
// Changer la taille du texte
// -------------------------

// Récupérer les éléments liens
const textSizeLink = document.getElementById('text-size');
const contrastLink = document.getElementById('contrast');
const textSizeLi = document.getElementById('text-size-li');

const range = textSizeLi.querySelector('input[type="range"]');

range.addEventListener('input', function() {
    adjustTextSize(range.value);
});

function adjustTextSize(textSize) {
    const minSize = 12; // Taille de police minimale autorisée
    const maxSize = 28; // Nouvelle taille de police maximale autorisée (20px)

    // Vérifier si la taille du texte est inférieure à la taille minimale
    if (textSize < minSize) {
        textSize = minSize; // Utiliser la taille minimale
    }

    // Vérifier si la taille du texte dépasse la taille maximale
    if (textSize > maxSize) {
        textSize = maxSize; // Utiliser la taille maximale
    }

    // Modifier uniquement les balises <p> avec la taille de police ajustée
    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontSize = textSize + 'px';
    }
}

// -------------------------
// Changer le contrast
// -------------------------


// contrastLink.addEventListener('click', function() {
//     toggleContrast();
// });


// let isContrastOn = false;

// function toggleContrast() {
//     const elements = document.getElementsByClassName('high-contrast');
//     const contrastElements = document.getElementsByClassName('contrast');
//     for (let i = 0; i < elements.length; i++) {
//         contrastElements[i].classList.toggle('high-contrast');
//     }
// }


