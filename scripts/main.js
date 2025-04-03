import { series } from './data.js';
var componente = document.getElementById('series');
var componentePromedio = document.getElementById('promedio');
var foto = document.getElementById('imagen');
var titulo = document.getElementById('titulo');
var descripcion = document.getElementById('descripcion');
var enlace = document.getElementById('enlace');
// Cargar las filas en la tabla
cargarFilas();
// Mostrar el promedio de temporadas
componentePromedio.innerHTML = "Seasons average: ".concat(calcularPromedio());
// Crear los eventos para los botones
createBotones();
// Mostrar por defecto la primera serie
if (series.length > 0) {
    infoSerie(series[0].id.toString());
}
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
    titulo.innerHTML = serie.name;
    descripcion.innerHTML = serie.description;
    enlace.setAttribute('href', serie.url);
    enlace.innerHTML = "More info";
}
function cargarFilas() {
    series.forEach(function (c) { return crearFila(c); });
}
function crearFila(serie) {
    var fila = document.createElement('tr');
    fila.innerHTML = "\n    <td style=\"font-weight: bold;\"> \n        ".concat(serie.id, "\n    </td>\n    <td style=\"color:#547dde; cursor: pointer;\">\n        <a id=\"").concat(serie.id, "\">").concat(serie.name, "</a>\n    </td>\n    <td>").concat(serie.channel, "</td>\n    <td>").concat(serie.seasons, "</td>");
    componente.appendChild(fila);
}
function calcularPromedio() {
    var promedio = series.reduce(function (sum, s) { return sum + s.seasons; }, 0) / series.length;
    return promedio.toFixed(2);
}
