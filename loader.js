window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Simule un délai de chargement de 2 secondes (2000 millisecondes)
    setTimeout(function() {
        // Cache l'écran de chargement et affiche le contenu principal
        loader.style.display = "none";
        content.style.display = "block";
    }, 2000);
});


// window.addEventListener("load", function() {
//     const loader = document.getElementById("loader");
//     const content = document.getElementById("content");

//     // Cache l'écran de chargement et affiche le contenu principal
//     loader.style.display = "none";
//     content.style.display = "block";
// });
