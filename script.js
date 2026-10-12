document.addEventListener("DOMContentLoaded", () => {
  
  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("oculto");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 600);
    }, 1500);
  }

  const cursorCirculo = document.querySelector(".cursor-personalizado");
  const cursorPunto = document.querySelector(".cursor-punto");

  if (cursorCirculo && cursorPunto) {
    document.addEventListener("mousemove", (e) => {
      cursorCirculo.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      cursorPunto.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });

    const elementosInteractivos = document.querySelectorAll(
      "a, button, .tech-chip, .tarjeta, .formacion-card"
    );
    elementosInteractivos.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        cursorCirculo.classList.add("hover")
      );
      el.addEventListener("mouseleave", () =>
        cursorCirculo.classList.remove("hover")
      );
    });
  }

  const texto = "Frank Ezcurra Bendezu";
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
    }
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

  const sonidoHover = new Audio("hover.mp3");
  const sonidoClick = new Audio("click.mp3");

  sonidoHover.volume = 0.10;
  sonidoClick.volume = 0.15;

  const elementosConSonido = document.querySelectorAll(
    "a, button, .tech-chip, .tarjeta, .formacion-card"
  );

  let usuarioInteractuo = false;
  document.addEventListener("click", () => {
    usuarioInteractuo = true;
  }, { once: true });

  elementosConSonido.forEach((elemento) => {
    elemento.addEventListener("mouseenter", () => {
      if (usuarioInteractuo) {
        sonidoHover.currentTime = 0;
        sonidoHover.play().catch(() => {});
      }
    });
    elemento.addEventListener("click", () => {
      usuarioInteractuo = true;
      sonidoClick.currentTime = 0;
      sonidoClick.play().catch(() => {});
    });
  });

});