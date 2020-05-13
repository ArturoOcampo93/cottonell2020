function DespliegueRegistro() {
    var x = document.getElementById('RegistroForm');

    if (x.style.display == "flex") {
        x.style.animation = "zoomOut 1s 1";
        setTimeout(CerrarRegistro, 500);
        document.getElementById('flechaRegistro').src = "images/FlechaDown.gif";

    } else {
        x.style.display = "flex";
        x.style.animation = "zoomIn 1s 1";
        document.getElementById('flechaRegistro').src = "images/FlechaUp.gif";
    }
}

function CerrarRegistro() {
    document.getElementById('RegistroForm').style.display = "none";
}

function DespliegueLogIn() {
    var x = document.getElementById('LogInForm');

    if (x.style.display == "flex") {
        x.style.animation = "zoomOut 1s 1";
        setTimeout(CerrarLogin, 500);
        document.getElementById('flechaLogin').src = "images/FlechaDown.gif";

    } else {
        x.style.display = "flex";
        x.style.animation = "zoomIn 1s 1";
        document.getElementById('flechaLogin').src = "images/FlechaUp.gif";
    }
}

function CerrarLogin() {
    document.getElementById('LogInForm').style.display = "none";
}

function login() {
    var x = document.getElementById('registro');
    var y = document.getElementById('login');
    var z = document.getElementById('LogInForm');

    x.style.display = "none";
    y.style.display = "flex";
    z.style.display = "flex";
    z.style.animation = "fadeInRight 1s 1";
    document.getElementById('flechaLogin').src = "images/FlechaUp.gif";
}

function registrar() {
    var x = document.getElementById('registro');
    var y = document.getElementById('login');
    var z = document.getElementById('RegistroForm');

    y.style.display = "none";
    x.style.display = "flex";
    z.style.display = "flex";
    z.style.animation = "fadeInLeft 1s 1";
    document.getElementById('flechaRegistro').src = "images/FlechaUp.gif";
}