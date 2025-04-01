import { series } from './data.js';
var componente = document.getElementById('series');
var componentePromedio = document.getElementById('promedio');
cargarFilas();
componentePromedio.innerHTML = "Seasons average: ".concat(calcularPromedio());
function cargarFilas() {
    series.forEach(function (c) { return crearFila(c); });
}
function crearFila(serie) {
    var fila = document.createElement('tr');
    fila.innerHTML = ("\n    <td style = \"font-weight: bold;\"> \n        ".concat(serie.id, "\n    </td>\n    <td style = \"color:#547dde;\">\n        ").concat(serie.name, "\n    </td>\n    <td>\n        ").concat(serie.channel, "\n    </td>\n    <td>\n        ").concat(serie.seasons, "\n    </td>"));
    componente.appendChild(fila);
}
function calcularPromedio() {
    var promedio = 0;
    series.forEach(function (s) { return promedio += s.seasons; });
    promedio /= series.length;
    var promedioTotal = promedio.toFixed(0);
    return promedioTotal;
}
