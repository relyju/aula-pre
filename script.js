document.addEventListener("DOMContentLoaded", () => {

  console.log("Aula Pre está funcionando correctamente.");

  /*
   * ==========================================
   * NAVEGACIÓN SUAVE
   * ==========================================
   */

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /*
   * ==========================================
   * ANIMACIÓN DE TARJETAS
   * ==========================================
   */

  const cards = document.querySelectorAll(
    ".course-card, .feature-item"
  );

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition =
      "opacity 0.5s ease, transform 0.5s ease";

    observer.observe(card);

  });


  /*
   * ==========================================
   * ESTADO DE LAS ANIMACIONES
   * ==========================================
   */

  const style = document.createElement("style");

  style.textContent = `

    .course-card.visible,
    .feature-item.visible {

      opacity: 1 !important;

      transform: translateY(0) !important;

    }

  `;

  document.head.appendChild(style);


  /*
   * ==========================================
   * BOTONES DE CURSOS
   * ==========================================
   *
   * Por ahora mostramos un mensaje.
   *
   * Más adelante estos botones abrirán:
   *
   * Curso
   *   ↓
   * Módulos
   *   ↓
   * Temas
   *   ↓
   * Videos
   *
   * ==========================================
   */

  const courseLinks = document.querySelectorAll(
    ".course-link"
  );

  courseLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      event.preventDefault();

      const courseCard =
        link.closest(".course-card");

      if (!courseCard) {
        return;
      }

      const courseName =
        courseCard.querySelector("h3")?.textContent ||
        "este curso";

      alert(
        `Estamos preparando el curso de ${courseName}.`
      );

    });

  });

});
