import { series } from './data.js';
var componente = document.getElementById('series');
var componentePromedio = document.getElementById('promedio');
var foto = document.getElementById('imagen');
var titulo = document.getElementById('titulo');
var descripcion = document.getElementById('descripcion');
var enlace = document.getElementById('enlace');
cargarFilas();
componentePromedio.innerHTML = "Seasons average: ".concat(calcularPromedio());
createBotones();
function createBotones() {
    series.forEach(function (c) {
        var boton = document.getElementById("".concat(c.id));
        boton.onclick = function () { infoSerie(boton.id); };
    });
}
function infoSerie(id) {
    var idR = parseInt(id);
    var serie = series[idR - 1];
    foto.setAttribute('src', serie.image);
    titulo.innerHTML = "".concat(serie.name);
    descripcion.innerHTML = "".concat(serie.description);
    enlace.setAttribute('href', "".concat(serie.url));
    enlace.innerHTML = "".concat(serie.url);
}
function cargarFilas() {
    series.forEach(function (c) { return crearFila(c); });
}
function crearFila(serie) {
    var fila = document.createElement('tr');
    fila.innerHTML = ("\n    <td style = \"font-weight: bold;\"> \n        ".concat(serie.id, "\n    </td>\n    <td style = \"color:#547dde; hover\">\n        <a id = \"").concat(serie.id, "\">").concat(serie.name, "</a>\n    </td>\n    <td>\n        ").concat(serie.channel, "\n    </td>\n    <td>\n        ").concat(serie.seasons, "\n    </td>"));
    componente.appendChild(fila);
}
function calcularPromedio() {
    var promedio = 0;
    series.forEach(function (s) { return promedio += s.seasons; });
    promedio /= series.length;
    var promedioTotal = promedio.toFixed(0);
    return promedioTotal;
}
