let ul = document.querySelector('.personagens')
ul.classList.add('azul')

function mudarEstado(elemento) {
    var display = document.getElementById(elemento).style.display;
    if(display == "none") {
        document.getElementById(elemento).style.display = 'block';
    }
    else {
        document.getElementById(elemento).style.display = 'none';
    }
}


