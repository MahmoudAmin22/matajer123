 
let toggled = 1;

function toggleSwitch() {
  const toggle = document.querySelector('.checked');
  toggle.classList.toggle('active');
  toggled = !toggled;
  changePrices();
}

function changePrices() {
  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');

  if (toggled) {
    p1.innerHTML = '<s>1,900</s>';
    p2.innerHTML = '3,600 SAR';
  } else {
    p1.innerHTML = '<s>3,600</s>';
    p2.innerHTML = '1,900 SAR';
  }
}

  


const toggleBtn = document.getElementById("toggle-theme");
const Payment = document.getElementById("Payment");
const body = document.body;

toggleBtn.addEventListener("click", () => {
body.classList.toggle("dark-mode");


toggleBtn.textContent =  body.classList.contains("dark-mode") ? "☀️" : "🌙";
 
});

let nav = document.querySelector("nav");
let toggleMenu = document.querySelectorAll(".toggle-menu");
window.addEventListener("scroll", scroll);

function scroll() {
if (window.scrollY > 10) {
  nav.style.top = "0";
  nav.style.transition = "0.5s";
  nav.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset";
  nav.style.background = "indigo";
  
  toggleMenu.forEach(link => {
    link.style.color = "white";
  });
}

else {
  // nav.style.top = "-100px";
  nav.style.transition = "0.5s";
  nav.style.boxShadow = "none";
  nav.style.background = "none";
  toggleMenu.forEach(link => {
    link.style.color = "gray";
  });
}
}

  