document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. PRELOADER (Pantalla de carga)
  // ==========================================
  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("oculto");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 600);
    }, 1500);
  }

  // ==========================================
  // 2. CURSOR PERSONALIZADO
  // ==========================================
  const cursorCirculo = document.querySelector(".cursor-personalizado");
  const cursorPunto = document.querySelector(".cursor-punto");

  if (cursorCirculo && cursorPunto) {
    // Movimiento con transform (más eficiente y suave)
    document.addEventListener("mousemove", (e) => {
      cursorCirculo.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      cursorPunto.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });

    // Efecto hover en enlaces, botones y elementos clicables
    const elementosInteractivos = document.querySelectorAll(
      "a, button, .tech-chip, .tarjeta, .formacion-card",
    );
    elementosInteractivos.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        cursorCirculo.classList.add("hover"),
      );
      el.addEventListener("mouseleave", () =>
        cursorCirculo.classList.remove("hover"),
      );
    });
  }

  // ==========================================
  // 3. EFECTO MÁQUINA DE ESCRIBIR
  // ==========================================
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

  // ==========================================
  // 4. ANIMACIÓN DE APARICIÓN AL SCROLL
  // ==========================================
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

  // ==========================================
  // 5. LÓGICA DEL FORMULARIO DE SUSCRIPCIÓN
  // ==========================================
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

  // ==========================================
  // 6. MODO CLARO / OSCURO
  // ==========================================
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

  // ==========================================
  // 7. RELOJ EN VIVO DE AYACUCHO
  // ==========================================
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
