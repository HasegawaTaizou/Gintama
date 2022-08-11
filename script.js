let todasLi = document.querySelectorAll('li');

function esconderLista() {
    todasLi.forEach(item => {
        item.classList.togle('esconder');
    })
}