// =========================
// COPY SERVER IP
// =========================

function copyIP() {

  navigator.clipboard.writeText("play.dewata.id");

  const toast =
    document.getElementById("toast");

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);

}

// =========================
// PLAYER COUNTER
// =========================

const playerCounter =
  document.getElementById("players");

let count = 0;
const target = 247;

const counter = setInterval(() => {

  count++;

  if (playerCounter) {
    playerCounter.innerText = count;
  }

  if (count >= target) {
    clearInterval(counter);
  }

}, 10);

// =========================
// PARTICLES
// =========================

window.addEventListener("load", () => {

  if (typeof tsParticles !== "undefined") {

    tsParticles.load("particles-js", {

      particles: {

        number: {
          value: 70
        },

        color: {
          value: [
            "#8b5cf6",
            "#06b6d4",
            "#ffffff"
          ]
        },

        links: {
          enable: true,
          distance: 140,
          opacity: 0.15,
          color: "#8b5cf6"
        },

        move: {
          enable: true,
          speed: 1
        },

        size: {
          value: {
            min: 1,
            max: 3
          }
        },

        opacity: {
          value: 0.6
        }

      },

      interactivity: {

        events: {

          onHover: {
            enable: true,
            mode: "grab"
          },

          resize: true

        },

        modes: {

          grab: {
            distance: 180,
            links: {
              opacity: 0.2
            }
          }

        }

      },

      detectRetina: true

    });

  }

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
  document.querySelectorAll(
    ".card, .guide-card, .rank-card, .community-box, .contact-box"
  );

function revealOnScroll() {

  revealElements.forEach((element) => {

    const windowHeight =
      window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 80) {

      element.style.opacity = "1";

      element.style.transform =
        "translateY(0)";

    }

  });

}

revealElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(50px)";

  element.style.transition =
    "all .7s ease";

});

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

// =========================
// HEADER SCROLL EFFECT
// =========================

const header =
  document.querySelector(".header");

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 50) {

      header.style.background =
        "rgba(10,10,20,.82)";

      header.style.backdropFilter =
        "blur(18px)";

      header.style.borderBottom =
        "1px solid rgba(255,255,255,.08)";

    } else {

      header.style.background =
        "rgba(10,10,20,.5)";

      header.style.backdropFilter =
        "blur(14px)";

      header.style.borderBottom =
        "1px solid rgba(255,255,255,.05)";

    }

  }
);

// =========================
// SMOOTH BUTTON HOVER
// =========================

const buttons =
  document.querySelectorAll(
    ".btn-primary, .btn-secondary, .buy-btn, .store-btn, .wa-btn, .play-btn"
  );

buttons.forEach((button) => {

  button.addEventListener(
    "mouseenter",
    () => {

      button.style.transform =
        "translateY(-4px)";

    }
  );

  button.addEventListener(
    "mouseleave",
    () => {

      button.style.transform =
        "translateY(0)";

    }
  );

});

// =========================
// LANGUAGE SELECT
// =========================

const languageSelect =
  document.getElementById(
    "languageSelect"
  );

if(languageSelect){

  languageSelect.addEventListener(
    "change",
    () => {

      const lang =
        languageSelect.value;

      const toast =
        document.getElementById(
          "toast"
        );

      toast.innerText =
        "Language Changed: " + lang;

      toast.classList.add("show");

      setTimeout(() => {

        toast.classList.remove(
          "show"
        );

      },2000);

    }
  );

}

// =========================
// LIVE STATUS RANDOM
// =========================

const livePlayers =
  document.getElementById(
    "livePlayers"
  );

if(livePlayers){

  setInterval(() => {

    const random =
      Math.floor(
        Math.random() * 80
      ) + 200;

    livePlayers.innerText =
      random;

  },3000);

}