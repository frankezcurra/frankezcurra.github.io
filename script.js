document.addEventListener("DOMContentLoaded", () => {
  const texto = "Frank Bendezu Ezcurra";
  const elemento = document.getElementById("texto-escribir");
  let i = 0;

  function escribir() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escribir, 200);
    }
  }
  setTimeout(escribir, 500);

  const elementosAnimar = document.querySelectorAll(".aparecer");

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  elementosAnimar.forEach((elemento) => {
    observador.observe(elemento);
  });

  const formulario = document.getElementById("formulario-suscripcion");
  const inputNombre = document.getElementById("input-nombre");
  const mensajeGracias = document.getElementById("mensaje-gracias");
  const nombreUsuario = document.getElementById("nombre-usuario");

  if (formulario) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = inputNombre.value;

      nombreUsuario.textContent = nombre;
      mensajeGracias.style.display = "block";

      formulario.reset();

      setTimeout(() => {
        mensajeGracias.style.display = "none";
      }, 5000);
    });
  }

  const botonTema = document.getElementById("boton-tema");
  const iconoBoton = botonTema.querySelector("i");

  botonTema.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      iconoBoton.classList.remove("fa-moon");
      iconoBoton.classList.add("fa-sun");
    } else {
      iconoBoton.classList.remove("fa-sun");
      iconoBoton.classList.add("fa-moon");
    }
  });

  const reloj = document.getElementById("reloj-ayacucho");

  function actualizarReloj() {
    if (!reloj) return;

    const ahora = new Date();

    const opciones = {
      timeZone: "America/Lima",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const horaFormateada = ahora.toLocaleTimeString("es-PE", opciones);

    reloj.textContent = horaFormateada.toUpperCase();
  }
  setInterval(actualizarReloj, 1000);

  actualizarReloj();
});
