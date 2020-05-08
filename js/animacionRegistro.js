function DespliegueRegistro() {
    var x = document.getElementById('RegistroForm');

    if (x.style.display == "none") {
        x.style.display = "flex";
        document.getElementById('flechaRegistro').src = "images/FlechaUp.gif";

    } else {
        x.style.display = "none";
        document.getElementById('flechaRegistro').src = "images/FlechaDown.gif";
    }
}

function DespliegueLogIn() {
    var x = document.getElementById('LogInForm');

    if (x.style.display == "none") {
        x.style.display = "flex";
        document.getElementById('flechaLogin').src = "images/FlechaUp.gif";

    } else {
        x.style.display = "none";
        document.getElementById('flechaLogin').src = "images/FlechaDown.gif";
    }
}

function login() {
    var x = document.getElementById('registro');
    var y = document.getElementById('login');
    var z = document.getElementById('LogInForm');

    x.style.display = "none";
    y.style.display = "flex";
    z.style.display = "flex";
    document.getElementById('flechaLogin').src = "images/FlechaUp.gif";
}

function registrar() {
    var x = document.getElementById('registro');
    var y = document.getElementById('login');
    var z = document.getElementById('RegistroForm');

    y.style.display = "none";
    x.style.display = "flex";
    z.style.display = "flex";
    document.getElementById('flechaRegistro').src = "images/FlechaUp.gif";
}