"use strict";
const row = document.getElementById("contenedor-carousel");
const movies = document.querySelectorAll(".peliculas");
const rightArrow = document.getElementById("flecha-derecha");
const leftArrow = document.getElementById("flecha-izquierda");

// Event Listener para rightArrow //

rightArrow.addEventListener("click", () => {
  row.scrollLeft += row.offsetWidth;

  // Para cambiar la clase del indicador que este activo //

  const indicadorAct = document.querySelector(".indicadores .activo");
  if (indicadorAct.nextElementSibling) {
    indicadorAct.nextElementSibling.classList.add("activo");
    indicadorAct.classList.remove("activo");
  }
});

// Event Listener para leftArrow //

leftArrow.addEventListener("click", () => {
  row.scrollLeft -= row.offsetWidth;
  const indicadorAct = document.querySelector(".indicadores .activo");
  if (indicadorAct.previousElementSibling) {
    indicadorAct.previousElementSibling.classList.add("activo");
    indicadorAct.classList.remove("activo");
  }
});

// array peliculas //

const cantPeliculas = Math.ceil(movies.length / 5);

for (let i = 0; i < cantPeliculas; i++) {
  const indicador = document.createElement("button");
  if (i === 0) {
    indicador.classList.add("activo");
  }
  document.querySelector(".indicadores").appendChild(indicador);
  indicador.addEventListener("click", (ev) => {
    row.scrollLeft = i * row.offsetWidth;
    document.querySelector(".indicadores .activo").classList.remove("activo");
    ev.target.classList.add("activo");
  });
}

// EFECTO HOVER SOBRE LAS IMAGENES DEL CAROUSEL //

movies.forEach((peliculas) => {
  peliculas.addEventListener("mouseenter", (e) => {
    let elem = e.currentTarget;
    setTimeout(() => {
      movies.forEach((peliculas) => peliculas.classList.remove("hover"));
      elem.classList.add("hover");
    }, 300);
  });
});
