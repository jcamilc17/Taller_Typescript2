import { Serie } from './serie.js';
import { series } from './data.js';

let componente: HTMLElement = document.getElementById('series')!;
let componentePromedio: HTMLElement = document.getElementById('promedio')!;
let foto: HTMLElement = document.getElementById('imagen')!;
let titulo: HTMLElement = document.getElementById('titulo')!;
let descripcion: HTMLElement = document.getElementById('descripcion')!;
let enlace: HTMLElement = document.getElementById('enlace')!;

// Cargar las filas en la tabla
cargarFilas();

// Mostrar el promedio de temporadas
componentePromedio.innerHTML = `Seasons average: ${calcularPromedio()}`;

// Crear los eventos para los botones
createBotones();

// Mostrar por defecto la primera serie
if (series.length > 0) {
    infoSerie(series[0].id.toString());
}

function createBotones() {
    series.forEach(c => {
        let boton = document.getElementById(`${c.id}`)!;
        boton.onclick = () => { infoSerie(boton.id) };
    });
}

function infoSerie(id: string) {
    let idR: number = parseInt(id);
    let serie: Serie = series[idR - 1];

    foto.setAttribute('src', serie.image);
    titulo.innerHTML = serie.name;
    descripcion.innerHTML = serie.description;
    enlace.setAttribute('href', serie.url);
    enlace.innerHTML = "More info";
}

function cargarFilas(): void {
    series.forEach(c => crearFila(c));
}

function crearFila(serie: Serie): void {
    let fila = document.createElement('tr');
    fila.innerHTML = `
    <td style="font-weight: bold;"> 
        ${serie.id}
    </td>
    <td style="color:#547dde; cursor: pointer;">
        <a id="${serie.id}">${serie.name}</a>
    </td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>`;
    
    componente.appendChild(fila);
}

function calcularPromedio(): string {
    let promedio = series.reduce((sum, s) => sum + s.seasons, 0) / series.length;
    return promedio.toFixed(2);
}
