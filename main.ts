import {Serie} from './serie.js';
import { series } from './data.js';

let componente: HTMLElement = document.getElementById('series')!;
let componentePromedio: HTMLElement = document.getElementById('promedio')!;

cargarFilas();
componentePromedio.innerHTML = `Seasons average: ${calcularPromedio()}`;


function cargarFilas(): void{
    series.forEach(c => crearFila(c));
}

function crearFila(serie: Serie):void{
    let fila = document.createElement('tr');
    fila.innerHTML = (`
    <td style = "font-weight: bold;"> 
        ${serie.id}
    </td>
    <td style = "color:#547dde;">
        ${serie.name}
    </td>
    <td>
        ${serie.channel}
    </td>
    <td>
        ${serie.seasons}
    </td>`);
    componente.appendChild(fila);
}

function calcularPromedio(): string{
    let promedio = 0;
    series.forEach(s => promedio += s.seasons);
    promedio /= series.length;
    let promedioTotal = promedio.toFixed(0);
    return promedioTotal;
}