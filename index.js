function muestra_E1(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_E1('contenidoE1');
}

function cerrarE1() {
    document.getElementById("contenidoE1").style.display = "none";
}


function muestra_E2(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_E2('contenidoE2');
}

function cerrarE2() {
    document.getElementById("contenidoE2").style.display = "none";
}