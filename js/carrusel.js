let indice = 0;
let imagenes = ["assets/img/cherno.jpg", "assets/img/gipsy.png", "assets/img/striker.jpg", "assets/img/typhoon.jpg"];


document.getElementById("siguiente").addEventListener("click", () => {
    indice++;
    if (indice >= imagenes.length) {
        indice = 0;
    }
    document.getElementById("img").setAttribute("src", imagenes[indice]);
});


document.getElementById("anterior").addEventListener("click", () => {
    indice--;
    if (indice < 0) {
        indice = imagenes.length - 1;
    }
    document.getElementById("img").setAttribute("src", imagenes[indice]);
});