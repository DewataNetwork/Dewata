// =========================
// COPY IP
// =========================

function copyIP(){

  navigator.clipboard.writeText("play.dewata.id");

  const toast = document.getElementById("toast");

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);

}

// =========================
// PLAYER COUNTER
// =========================

const playerCounter = document.getElementById("players");

let count = 0;
let target = 247;

const counter = setInterval(() => {

  count++;

  playerCounter.innerText = count;

  if(count >= target){

    clearInterval(counter);

  }

}, 10);

// =========================
// PARTICLES
// =========================

window.addEventListener("load", () => {

tsParticles.load("particles-js",{

  background:{
    color:"transparent"
  },

  particles:{

    number:{
      value:80
    },

    color:{
      value:[
        "#8b5cf6",
        "#06b6d4",
        "#ffffff"
      ]
    },

    links:{
      enable:true,
      color:"#8b5cf6",
      distance:140,
      opacity:0.2
    },

    move:{
      enable:true,
      speed:1
    },

    size:{
      value:{
        min:1,
        max:3
      }
    },

    opacity:{
      value:.5
    }

  }

});

});

// =========================
// SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(
  '.card, .product, .feature-card, .event-card, .rank-card, .faq-card, .guide-card'
);

function revealOnScroll(){

  reveals.forEach(reveal => {

    const windowHeight = window.innerHeight;

    const revealTop =
      reveal.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      reveal.style.opacity = 1;

      reveal.style.transform =
        'translateY(0)';

    }

  });

}

window.addEventListener(
  'scroll',
  revealOnScroll
);

reveals.forEach(reveal => {

  reveal.style.opacity = 0;

  reveal.style.transform =
    'translateY(40px)';

  reveal.style.transition =
    '.6s ease';

});

revealOnScroll();