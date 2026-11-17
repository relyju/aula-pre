
document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // AULA PRE - CONFIGURACIÓN DE LOS CURSOS
  // ==========================================

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

        3: [
          {
            title: "Valor absoluto",
            videos: [
              "FOWwa9TR7GY",
              "In9ThOvuYWE"
            ]
          },
          {
            title: "Matrices",
            videos: [
              "Z2vv-KdVfwI",
              "zMATgyh-XHs",
              "om0Y3X22GgY"
            ]
          },
          {
            title: "Relaciones",
            videos: [
              "VKODWFCmjVg",
              "zrDZjo2b4Rs"
            ]
          }
        ],

        4: [
          {
            title: "Función",
            videos: ["5NwVVpYQpdo"]
          },
          {
            title: "Funciones especiales",
            videos: ["a9FiGQLryYI"]
          },
          {
            title: "Clases de funciones",
            videos: ["b5t3gVetdQQ"]
          },
          {
            title: "Operaciones con funciones",
            videos: ["0Os9xubzV-c"]
          },
          {
            title: "Función exponencial",
            videos: ["2kocZuXvyys"]
          },
          {
            title: "Función logarítmica",
            videos: [
              "LjvKhRiUATY",
              "eyQ8A7Pv85U",
              "pm2QCMx2XUc"
            ]
          }
        ]
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

        3: [
          {
            title: "MCM y MCD",
            videos: [
              "bpWUsvC2oj0",
              "Yfp8JLDuwL0"
            ]
          },
          {
            title: "Razones y proporciones",
            videos: [
              "fAMjnzgOaVs",
              "ASZ3CCOJorI"
            ]
          },
          {
            title: "Magnitudes proporcionales",
            videos: ["OktMDP0oDZ4"]
          },
          {
            title: "Regla de tres y tanto por ciento",
            videos: [
              "KinxK-CmQN8",
              "HCtiHFXvg6o",
              "wlKI6Bq7xL0",
              "i_7VidkH5kQ"
            ]
          }
        ],

        4: [
          {
            title: "Interés simple y compuesto",
            videos: ["e6JdLQFqAYc"]
          },
          {
            title: "Estadística",
            videos: [
              "vfI_1Sc2ipk",
              "CbaVi1ScxVY",
              "seG3x-dZyH0"
            ]
          },
          {
            title: "Probabilidades",
            videos: [
              "MN2iOthTPhE",
              "RcxP46IRwCk",
              "UIzpgpMKcn8",
              "Ly3R0qwonco"
            ]
          }
        ]
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

        3: [
          {
            title: "Áreas de regiones",
            videos: [
              "iEWaLrlw6Ds",
              "XWHoTxqKVag",
              "XWHoTxqKVag",
              "q2RrcwjSUNQ",
              "j3rhlvDBQ3Y",
              "YpqdFsrAP1U"
            ]
          },
          {
            title: "Fundamentos de la trigonometría",
            videos: [
              "wvsSlrUnoHU",
              "Hswd-KeXalo",
              "d04ujsvs2uE"
            ]
          },
          {
            title: "Razones trigonométricas de ángulos agudos",
            videos: []
          },
          {
            title: "Ángulos en posición normal",
            videos: [
              "7-XWy4VqbOg",
              "TaYEWgonsMQ",
              "xubhZ5dvUDQ",
              "7d0HGnodxT4"
            ]
          }
        ],

        4: [
          {
            title: "Identidades trigonométricas",
            videos: [
              "7en6jLj9bsE",
              "BC5PRQUdkPA",
              "JuKfG4AZb2Q",
              "TWHQjpfDDuY"
            ]
          },
          {
            title: "Triángulos verticales y horizontales",
            videos: ["I8Jta8C4QBo"]
          },
          {
            title: "Funciones trigonométricas",
            videos: [
              "GsM7EdTsCNQ",
              "vi1n7UF07rM"
            ]
          }
        ]
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

        3: [
          {
            title: "Temperatura, dilatación y calor",
            videos: [
              "IPqu3AQzqzc",
              "4SS4xi2s3fc",
              "tyIPYCyoZnA",
              "yy96lIppTTg",
              "hgGmtlMzJpI"
            ]
          },
          {
            title: "Termodinámica",
            videos: [
              "rioH9IT9koI",
              "AKyuzMs23XY",
              "Cv4Z4ua7vbs",
              "qv4dW-m_NEc"
            ]
          },
          {
            title: "Electrostática",
            videos: [
              "VA2QY5xtqBA",
              "sxbj3F9h19I",
              "VsvMoRGw7kw",
              "5mVkrWvV9QA",
              "ucNIREhQY1E"
            ]
          },
          {
            title: "Electrodinámica",
            videos: [
              "UtEPADHO1Rs",
              "PvYIJIq3giU",
              "TUOBVA2HSag",
              "b7gPnOfaSIg",
              "9ctwiTh7iFY",
              "HMGK1KXKLlo",
              "JYTQUkfr9K8"
            ]
          }
        ],

        4: [
          {
            title: "Electromagnetismo",
            videos: [
              "7y-1i0U4rYQ",
              "liyM9ixjlCs",
              "OPpt7vwF64Q",
              "WQxFlTpC_iM"
            ]
          },
          {
            title: "Movimiento ondulatorio",
            videos: [
              "z9TbbqnsHtI",
              "K8qUwirJA7Q",
              "liosnKKWT_c"
            ]
          },
          {
            title: "Sonido",
            videos: [
              "UxznM5sV2o8",
              "IExObqXK3Ow"
            ]
          },
          {
            title: "Óptica",
            videos: [
              "4Eu0FeJIPgo",
              "H1sdOx_dO2Q"
            ]
          },
          {
            title: "Física moderna",
            videos: [
              "wT2fA1qRCjc",
              "2B-hlo2SWfs",
              "nbwD-b1dAGQ",
              "3TmHrz5wIiM",
              "yrx6qQBj4qU",
              "eyKG_qAC7yQ"
            ]
          }
        ]
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

        3: [
          {
            title: "Reacciones químicas",
            videos: [
              "s3V7XXmeAn0",
              "dPyCR6I_8Ok",
              "UuPFp1L0F5o"
            ]
          },
          {
            title: "Estequiometría de las reacciones químicas",
            videos: [
              "fI6Hq8CYF0Q",
              "PorA7bDJDNs",
              "utl0-cmhNgM",
              "EI7e3Pj9g8U"
            ]
          },
          {
            title: "Soluciones",
            videos: [
              "qhn-KrmO3cE",
              "toY_HJOEwwI",
              "XZ29HEWnt8M",
              "Z6m447N6yyg",
              "mqWtGU1TAsI",
              "uhskyhXmrgw"
            ]
          },
          {
            title: "Equilibrio químico",
            videos: [
              "9X4HtFISq-g",
              "h5vvoYIYW5M",
              "d_DjgHplfHc",
              "DAbVA7jn7oQ",
              "TJ7wseidG8s"
            ]
          }
        ],

        4: [
          {
            title: "Hidrocarburos – Parte 1",
            videos: [
              "mv0nBzDafFU",
              "d2zcSl90q4M",
              "3QaVoBclkOU",
              "8Dk0xYoJIYg",
              "xsQAbyI4YfU",
              "RuTBIiGWLKw"
            ]
          },
          {
            title: "Alcoholes – Parte 2",
            videos: [
              "1ZpOm_o-SqU",
              "zfDepseoCLc",
              "QmZTmx36qYs",
              "9cErGV5hNTg",
              "itm7qiEUS4o",
              "GwXuZTlt_kA",
              "4jQcuj-TjPs",
              "-oxnJDz1ow4",
              "m2iJBobY6o8",
              "2TqtyAI6BuA",
              "QUBDX7drH_g"
            ]
          }
        ]
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

        3: [
          {
            title: "Pronombre",
            videos: [
              "8ANIhGrZN18",
              "06vRsagY4ak",
              "68B6L4rd_YU"
            ]
          },
          {
            title: "Adjetivo",
            videos: [
              "QyYYrYvk89Q",
              "0XHQ8MuXKwI"
            ]
          },
          {
            title: "Artículo y adverbio",
            videos: [
              "9rOnuvPWQsM",
              "p41b9Py8H_4",
              "AYmugX5q-Lc"
            ]
          },
          {
            title: "Verbo",
            videos: [
              "P_Vz4TFO3-s",
              "kj6zUVjA7lw",
              "zcAGnBUmDrY"
            ]
          }
        ],

        4: [
          {
            title: "Preposición y conjunción",
            videos: [
              "_77-68wwwms",
              "OPdIjKFwsHw"
            ]
          },
          {
            title: "Sintaxis y oración gramatical",
            videos: [
              "BdriClP-j0M",
              "HrsAGswG4hc",
              "alw1xEv9cec"
            ]
          },
          {
            title: "Texto y lectura",
            videos: [
              "3QeEpsjGXFQ",
              "7AE0djNJ7i0"
            ]
          },
          {
            title: "Relación semántica",
            videos: [
              "v8y4eZx-IHY",
              "x_gYa0OyQ0g"
            ]
          }
        ]
      },

      review: []
    }

  };


  // ==========================================
  // ELEMENTOS PRINCIPALES
  // ==========================================

  const courseLinks =
    document.querySelectorAll(".course-link");

  const main = document.querySelector("main");

  if (!main) {
    console.error("Aula Pre: no se encontró el elemento main.");
    return;
  }

  let view = document.querySelector("#course-view");

  if (!view) {
    view = document.createElement("section");
    view.id = "course-view";
    view.className = "course-view";
    main.appendChild(view);
  }

  view.hidden = true;


  // ==========================================
  // FUNCIONES AUXILIARES
  // ==========================================

  function scrollToView(element) {
    window.scrollTo({
      top: element.offsetTop - 70,
      behavior: "smooth"
    });
  }


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


  function renderVideoList(videos, label = "Video") {
    if (!videos || videos.length === 0) {
      return `
        <div class="empty-videos">
          <p>Los videos de este tema estarán disponibles próximamente.</p>
        </div>
      `;
    }

    return `
      <div class="video-list">
        ${videos.map((id, index) => `
          <article class="video-card">
            <div class="video-number">
              ${label} ${index + 1}
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
    `;
  }


  function showHomeSections() {
    document.querySelector(".hero")?.removeAttribute("hidden");
    document.querySelector(".courses")?.removeAttribute("hidden");
    document.querySelector(".about")?.removeAttribute("hidden");
  }


  function hideHomeSections() {
    const hero = document.querySelector(".hero");
    const courseSection = document.querySelector(".courses");
    const about = document.querySelector(".about");

    if (hero) hero.hidden = true;
    if (courseSection) courseSection.hidden = true;
    if (about) about.hidden = true;
  }


  // ==========================================
  // VOLVER A LOS CURSOS
  // ==========================================

  function showCourses() {
    view.hidden = true;
    showHomeSections();

    const section = document.querySelector(".courses");

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }


  // ==========================================
  // MOSTRAR UN CURSO Y SUS MÓDULOS
  // ==========================================

  function showCourse(courseName) {
    const course = courses[courseName];

    if (!course) return;

    hideHomeSections();
    view.hidden = false;

    view.innerHTML = `
      <div class="course-view-inner">

        <button class="back-button" id="back-home">
          ← Volver a cursos
        </button>

        <span class="eyebrow">CURSO</span>

        <h2>${courseName}</h2>

        <p class="course-view-intro">
          Selecciona un módulo para continuar con tu preparación.
        </p>

        <div class="module-grid">
          ${[1, 2, 3, 4].map(number => {
            const available =
              (course.modules[number] || []).length > 0;

            return `
              <button
                class="module-card ${available ? "module-active" : ""}"
                data-module="${number}"
                ${available ? "" : "disabled"}
                aria-disabled="${!available}">

                <span>Módulo ${number}</span>

                <strong>
                  ${available ? "Disponible" : "Próximamente"}
                </strong>

              </button>
            `;
          }).join("")}
        </div>

      </div>
    `;

    view.querySelector("#back-home")
      .addEventListener("click", showCourses);

    view.querySelectorAll(".module-card")
      .forEach(card => {
        card.addEventListener("click", () => {
          const moduleNumber = Number(card.dataset.module);

          if ((course.modules[moduleNumber] || []).length > 0) {
            showModule(courseName, moduleNumber);
          }
        });
      });

    scrollToView(view);
  }


  // ==========================================
  // MOSTRAR LOS TEMAS DE UN MÓDULO
  // ==========================================

  function showModule(courseName, moduleNumber) {
    const course = courses[courseName];

    if (!course) return;

    const topics = course.modules[moduleNumber] || [];

    view.hidden = false;

    view.innerHTML = `
      <div class="course-view-inner">

        <button class="back-button" id="back-course">
          ← Volver a módulos
        </button>

        <span class="eyebrow">
          ${courseName.toUpperCase()}
        </span>

        <h2>Módulo ${moduleNumber}</h2>

        <p class="course-view-intro">
          Selecciona un tema para ver sus clases en video.
        </p>

        <div class="topic-grid">
          ${topics.map((topic, index) => `
            <button
              class="topic-card"
              data-topic="${index}">

              <span>Tema ${index + 1}</span>

              <strong>${topic.title}</strong>

              <small>
                ${topic.videos.length}
                ${topic.videos.length === 1 ? "video" : "videos"}
              </small>

            </button>
          `).join("")}
        </div>

        ${
          moduleNumber === 2 && course.review.length
            ? `
              <div class="review-card">
                <div>
                  <span class="eyebrow">REPASO</span>
                  <strong>Repaso del módulo</strong>
                </div>

                <button class="review-button" id="open-review">
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

    const reviewButton = view.querySelector("#open-review");

    if (reviewButton) {
      reviewButton.addEventListener("click", () => {
        showReview(courseName, moduleNumber);
      });
    }

    scrollToView(view);
  }


  // ==========================================
  // MOSTRAR LOS VIDEOS DE UN TEMA
  // ==========================================

  function showTopic(courseName, moduleNumber, topicIndex) {
    const course = courses[courseName];

    if (!course) return;

    const topic = (course.modules[moduleNumber] || [])[topicIndex];

    if (!topic) return;

    view.hidden = false;

    view.innerHTML = `
      <div class="course-view-inner">

        <button class="back-button" id="back-module">
          ← Volver al módulo
        </button>

        <span class="eyebrow">
          ${courseName.toUpperCase()} · MÓDULO ${moduleNumber}
        </span>

        <h2>${topic.title}</h2>

        <p class="course-view-intro">
          Reproduce las clases y avanza a tu propio ritmo.
        </p>

        ${renderVideoList(topic.videos)}

      </div>
    `;

    view.querySelector("#back-module")
      .addEventListener("click", () => {
        showModule(courseName, moduleNumber);
      });

    scrollToView(view);
  }


  // ==========================================
  // MOSTRAR EL REPASO DEL MÓDULO 2
  // ==========================================

  function showReview(courseName, moduleNumber = 2) {
    const course = courses[courseName];

    if (!course) return;

    view.hidden = false;

    view.innerHTML = `
      <div class="course-view-inner">

        <button class="back-button" id="back-module-review">
          ← Volver al módulo
        </button>

        <span class="eyebrow">${courseName.toUpperCase()}</span>

        <h2>Repaso del módulo</h2>

        ${renderVideoList(course.review, "Repaso")}

      </div>
    `;

    view.querySelector("#back-module-review")
      .addEventListener("click", () => {
        showModule(courseName, moduleNumber);
      });

    scrollToView(view);
  }


  // ==========================================
  // ABRIR CURSOS DESDE LAS TARJETAS
  // ==========================================

  courseLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const card = link.closest(".course-card");

      const name = card
        ?.querySelector("h3")
        ?.textContent
        .trim();

      if (name && courses[name]) {
        showCourse(name);
      }
    });
  });


  // ==========================================
  // NAVEGACIÓN POR ANCLAS
  // ==========================================

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      // Evita que el enlace de un curso ejecute dos acciones.
      if (link.classList.contains("course-link")) return;

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      let target;

      try {
        target = document.querySelector(targetId);
      } catch (error) {
        return;
      }

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


  // ==========================================
  // ANIMACIONES DE LAS TARJETAS INICIALES
  // ==========================================

  const cards = document.querySelectorAll(
    ".course-card, .feature-item"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach(card => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition =
        "opacity 0.5s ease, transform 0.5s ease";

      observer.observe(card);
    });
  } else {
    cards.forEach(card => {
      card.classList.add("visible");
    });
  }


  // ==========================================
  // ESTILOS AUXILIARES
  // ==========================================

  const style = document.createElement("style");

  style.textContent = `
    .course-card.visible,
    .feature-item.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }

    .module-card:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    .empty-videos {
      padding: 24px;
      border-radius: 12px;
      text-align: center;
      background: var(--card-bg, #ffffff);
    }
  `;

  document.head.appendChild(style);

});
