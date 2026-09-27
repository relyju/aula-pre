document.addEventListener("DOMContentLoaded", () => {

  const courses = {

    "Álgebra": {
      modules: {
        1: [],
        2: [
          {
            title: "Factorización de polinomios",
            videos: ["4q5jawtWlIc"]
          },
          {
            title: "Racionalización",
            videos: ["VQUGNhUZsms", "uRoskyGaGyc"]
          },
          {
            title: "Ecuaciones de primer y segundo grado",
            videos: ["5zkpxHEaM7c", "45b4p9D84qQ"]
          },
          {
            title: "Inecuaciones de primer y segundo grado",
            videos: ["g0GgLje_0pY", "cEH48ouKiDM"]
          }
        ],
        3: [],
        4: []
      },
      review: ["1SXacaE6CP8"]
    },


    "Aritmética": {
      modules: {
        1: [],
        2: [
          {
            title: "Sucesiones y sumatorias notables",
            videos: ["H7TAFsIo2_c", "BmfQsC6l5eo"]
          },
          {
            title: "Sistemas de numeración",
            videos: ["p2dLzPuW2ZU", "PRNlXNlBjiw"]
          },
          {
            title: "Divisibilidad",
            videos: [
              "PRNlXNlBjiw",
              "R2lWcyodHXc",
              "Sl5pa5aRlE0"
            ]
          },
          {
            title: "Números primos",
            videos: ["kCG-XEu0Oxw"]
          }
        ],
        3: [],
        4: []
      },
      review: ["fQQXp6n8GOg"]
    },


    "Geometría": {
      modules: {
        1: [],
        2: [
          {
            title: "Proporcionalidad y semejanza de triángulos",
            videos: ["AGzt7hOptT0", "R_SOn2CLIns"]
          },
          {
            title: "Relaciones métricas",
            videos: ["ryj79uBX81o", "ryj79uBX81o"]
          },
          {
            title: "Cuadriláteros",
            videos: ["ecBIBF54h0o", "mDQqH2qkx1E"]
          },
          {
            title: "Circunferencia",
            videos: [
              "zF3RZtL7_zg",
              "1Z0mB0LA87Y",
              "OMiyb3en5Gg",
              "OMiyb3en5Gg",
              "TDC0itJ4L80"
            ]
          },
          {
            title: "Polígonos",
            videos: [
              "mI7uswnJfRg",
              "ArrJ4iNtpjE",
              "AH3lqDqGMuA"
            ]
          }
        ],
        3: [],
        4: []
      },
      review: ["sewPGWpsQ-4"]
    },


    "Física": {
      modules: {
        1: [],
        2: [
          {
            title: "Estática",
            videos: [
              "NHycjjL0x5Q",
              "ZP6ujVeTi9Y",
              "vFA_owBk7pQ"
            ]
          },
          {
            title: "Trabajo y energía",
            videos: [
              "99gJWrvaIok",
              "cTI-k_PnwCQ",
              "grmbW2ZelhM",
              "IhJiGRSM_88",
              "ndAe2mcctp0"
            ]
          },
          {
            title: "Dinámica de rotación",
            videos: [
              "xLCgbjrM2N8",
              "067mRjq97YU",
              "hbCNZBNvhYY",
              "W4Ib9bvBxUQ"
            ]
          },
          {
            title: "Movimiento oscilatorio",
            videos: [
              "fGCq2hPfQS4",
              "QxCqgEEhD2s",
              "rDdWUDz__nE"
            ]
          },
          {
            title: "Mecánica de fluidos",
            videos: [
              "W4Ib9bvBxUQ",
              "qqHYA6A2MC0",
              "oq7TaoMiac0",
              "QaX8DrrdkQI"
            ]
          }
        ],
        3: [],
        4: []
      },
      review: [
        "zQoqruLJnFc",
        "Y6OATvtDRKg"
      ]
    },


    "Química": {
      modules: {
        1: [],
        2: [
          {
            title: "Nomenclatura de compuestos inorgánicos",
            videos: [
              "3AhS77ZXR5g",
              "WMv-W4Of3eE",
              "SRTThVznc64",
              "g0Nr0M6F0Ko",
              "yNIGA6dLkgQ",
              "melpk0w2Pe0"
            ]
          },
          {
            title: "Masa atómica",
            videos: [
              "Pjj_Hkxiy0k",
              "CtWxH0L24os",
              "LIru6V_wcK8",
              "ZuVV_SlwjMQ",
              "cvtDjIUhmgQ",
              "ndXR9raDkj8",
              "QXsrBtPQZS0"
            ]
          },
          {
            title: "Reacciones químicas",
            videos: ["ZsYEbWA0W8M"]
          }
        ],
        3: [],
        4: []
      },
      review: [
        "hciQ_RTcdXs",
        "HeAyn_zHBQk"
      ]
    },


    "Comunicación": {
      modules: {
        1: [],
        2: [
          {
            title: "Tildación",
            videos: [
              "MkNMjm3aJMk",
              "ZqK3X_barpI",
              "fVim1lwD_0I"
            ]
          },
          {
            title: "Uso de letras mayúsculas y minúsculas",
            videos: [
              "fVim1lwD_0I",
              "S8rNr2jbWvQ"
            ]
          },
          {
            title: "Signos de puntuación",
            videos: [
              "DG6_84S85Nc",
              "dJcuWJH1eC0",
              "r66pgV6o08w",
              "DSO_Zood-AU"
            ]
          },
          {
            title: "Sustantivo",
            videos: [
              "DSO_Zood-AU",
              "3oqh2wdoU3g",
              "_cgyMdGdTKQ"
            ]
          }
        ],
        3: [],
        4: []
      },
      review: []
    }

  };


  const courseLinks = document.querySelectorAll(".course-link");


  const view = document.createElement("section");

  view.id = "course-view";
  view.className = "course-view";
  view.hidden = true;

  document.querySelector("main").appendChild(view);


  function youtubeEmbed(id) {

    return `
      <div class="video-frame">

        <iframe
          src="https://www.youtube-nocookie.com/embed/${id}"
          title="Video de Aula Pre"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>

      </div>
    `;

  }


  function showCourses() {

    view.hidden = true;

    document.querySelector(".hero").hidden = false;
    document.querySelector(".courses").hidden = false;
    document.querySelector(".about").hidden = false;

    window.scrollTo({
      top: document.querySelector(".courses").offsetTop - 70,
      behavior: "smooth"
    });

  }


  function showCourse(courseName) {

    const course = courses[courseName];

    document.querySelector(".hero").hidden = true;
    document.querySelector(".courses").hidden = true;
    document.querySelector(".about").hidden = true;

    view.hidden = false;


    view.innerHTML = `

      <div class="course-view-inner">

        <button class="back-button" id="back-home">
          ← Volver a cursos
        </button>

        <span class="eyebrow">
          CURSO
        </span>

        <h2>
          ${courseName}
        </h2>

        <p class="course-view-intro">
          Selecciona un módulo para continuar con tu preparación.
        </p>


        <div class="module-grid">

          ${[1, 2, 3, 4].map(number => `

            <button
              class="module-card ${number === 2 ? "module-active" : ""}"
              data-module="${number}">

              <span>
                Módulo ${number}
              </span>

              <strong>
                ${number === 2 ? "Disponible" : "Próximamente"}
              </strong>

            </button>

          `).join("")}

        </div>

      </div>

    `;


    view.querySelector("#back-home")
      .addEventListener("click", showCourses);


    view.querySelectorAll(".module-card")
      .forEach(card => {

        card.addEventListener("click", () => {

          const moduleNumber =
            Number(card.dataset.module);

          if (moduleNumber === 2) {

            showModule(courseName, moduleNumber);

          }

        });

      });


    window.scrollTo({
      top: view.offsetTop - 70,
      behavior: "smooth"
    });

  }


  function showModule(courseName, moduleNumber) {

    const course = courses[courseName];

    const topics =
      course.modules[moduleNumber] || [];


    view.innerHTML = `

      <div class="course-view-inner">

        <button class="back-button" id="back-course">
          ← Volver a módulos
        </button>

        <span class="eyebrow">
          ${courseName.toUpperCase()}
        </span>

        <h2>
          Módulo ${moduleNumber}
        </h2>

        <p class="course-view-intro">
          Selecciona un tema para ver sus clases en video.
        </p>


        <div class="topic-grid">

          ${topics.map((topic, index) => `

            <button
              class="topic-card"
              data-topic="${index}">

              <span>
                Tema ${index + 1}
              </span>

              <strong>
                ${topic.title}
              </strong>

              <small>
                ${topic.videos.length}
                ${topic.videos.length === 1 ? "video" : "videos"}
              </small>

            </button>

          `).join("")}

        </div>


        ${
          course.review.length
            ? `
              <div class="review-card">

                <div>

                  <span class="eyebrow">
                    REPASO
                  </span>

                  <strong>
                    Repaso del módulo
                  </strong>

                </div>

                <button
                  class="review-button"
                  id="open-review">

                  Ver repaso →

                </button>

              </div>
            `
            : ""
        }

      </div>

    `;


    view.querySelector("#back-course")
      .addEventListener("click", () => {

        showCourse(courseName);

      });


    view.querySelectorAll(".topic-card")
      .forEach(card => {

        card.addEventListener("click", () => {

          showTopic(
            courseName,
            moduleNumber,
            Number(card.dataset.topic)
          );

        });

      });


    const reviewButton =
      view.querySelector("#open-review");


    if (reviewButton) {

      reviewButton.addEventListener(
        "click",
        () => showReview(courseName)
      );

    }


    window.scrollTo({
      top: view.offsetTop - 70,
      behavior: "smooth"
    });

  }


  function showTopic(
    courseName,
    moduleNumber,
    topicIndex
  ) {

    const topic =
      courses[courseName]
        .modules[moduleNumber][topicIndex];


    view.innerHTML = `

      <div class="course-view-inner">

        <button class="back-button" id="back-module">
          ← Volver al módulo
        </button>

        <span class="eyebrow">
          ${courseName.toUpperCase()} · MÓDULO ${moduleNumber}
        </span>

        <h2>
          ${topic.title}
        </h2>


        <div class="video-list">

          ${topic.videos.map((id, index) => `

            <article class="video-card">

              <div class="video-number">
                Video ${index + 1}
              </div>

              ${youtubeEmbed(id)}

              <a
                class="youtube-link"
                href="https://www.youtube.com/watch?v=${id}"
                target="_blank"
                rel="noopener noreferrer">

                Abrir en YouTube ↗

              </a>

            </article>

          `).join("")}

        </div>

      </div>

    `;


    view.querySelector("#back-module")
      .addEventListener("click", () => {

        showModule(courseName, moduleNumber);

      });


    window.scrollTo({
      top: view.offsetTop - 70,
      behavior: "smooth"
    });

  }


  function showReview(courseName) {

    const review =
      courses[courseName].review;


    view.innerHTML = `

      <div class="course-view-inner">

        <button
          class="back-button"
          id="back-module-review">

          ← Volver al módulo

        </button>

        <span class="eyebrow">
          ${courseName.toUpperCase()}
        </span>

        <h2>
          Repaso del módulo
        </h2>


        <div class="video-list">

          ${review.map((id, index) => `

            <article class="video-card">

              <div class="video-number">
                Repaso ${index + 1}
              </div>

              ${youtubeEmbed(id)}

              <a
                class="youtube-link"
                href="https://www.youtube.com/watch?v=${id}"
                target="_blank"
                rel="noopener noreferrer">

                Abrir en YouTube ↗

              </a>

            </article>

          `).join("")}

        </div>

      </div>

    `;


    view.querySelector("#back-module-review")
      .addEventListener("click", () => {

        showModule(courseName, 2);

      });


    window.scrollTo({
      top: view.offsetTop - 70,
      behavior: "smooth"
    });

  }


  courseLinks.forEach(link => {

    link.addEventListener("click", event => {

      event.preventDefault();

      const card =
        link.closest(".course-card");

      const name =
        card?.querySelector("h3")
          ?.textContent
          .trim();


      if (name && courses[name]) {

        showCourse(name);

      }

    });

  });


  const links =
    document.querySelectorAll('a[href^="#"]');


  links.forEach(link => {

    link.addEventListener("click", event => {

      const targetId =
        link.getAttribute("href");


      if (!targetId || targetId === "#") {

        return;

      }


      const target =
        document.querySelector(targetId);


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


  const cards =
    document.querySelectorAll(
      ".course-card, .feature-item"
    );


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

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


  cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
      "translateY(20px)";

    card.style.transition =
      "opacity 0.5s ease, transform 0.5s ease";

    observer.observe(card);

  });


  const style =
    document.createElement("style");


  style.textContent = `

    .course-card.visible,
    .feature-item.visible {

      opacity: 1 !important;

      transform: translateY(0) !important;

    }

  `;


  document.head.appendChild(style);

});
