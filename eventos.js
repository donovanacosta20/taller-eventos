const divContenedor = document.getElementById('contenedor');
const button = document.getElementById('button');

 divContenedor.addEventListener('click', function (e) {

    alert('Hola! Soy el div');
});

button.addEventListener('click', function(e) {
    e.stopPropagation();
    alert('Hola!');
});