const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

let lista = [];

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  updateMenuIcon();
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  updateMenuIcon();
});

function updateMenuIcon() {
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
}

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

// Correct way to use ScrollReveal:
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal("showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});


const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//Mandando para Whatssap
function voluntario() {
  window.open("https://wa.link/7m2rn8", "_blank");
}



function emailConvidar (event) {
  
  event.preventDefault();
  const mensagem = document.querySelector("#mensagem");
  const email = document.querySelector("#receberEmail");
  const barra = document.querySelector("#barraTemp");
  const inscricao = document.querySelector("#buttonFomr");
 
  if(email.value !== "" && !lista.includes(email.value)){
    mensagem.textContent = "Email Valido"
    mostrarEmail();
     lista.unshift(email.value);
  }
  else{
    mensagem.textContent = "Email Invalido"
  }
  barra.style.display="flex";
  barra.style.justifyContent="center";
  barra.style.alignItems="center";
  barra.style.flexDirection="column";
  setTimeout(()=>{
    barra.style.display="none";
    email.value="";
  }, 2000);
  email.value = "";
  inscricao.disabled = false;
  emailInput.disabled = false;
  
}
function mandarSite() {
  window.open("pagina/doe.html", "_self");
}

function mostrarEmail(){
 console.log("Emails cadastrados:");
  lista.forEach((email, index) => {
    console.log(`${index + 1}: ${email}`);
  });
}
