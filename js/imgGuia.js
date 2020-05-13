function imgGuia() {
    var x = document.getElementById('img-guia');
    var y = document.getElementById('img-juego');
    x.style.display = "block";
    y.style.display = "none";
}

function clearCoor() {
    var x = document.getElementById('img-guia');
    var y = document.getElementById('img-juego');
    x.style.display = "none";
    y.style.display = "block";
}