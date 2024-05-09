var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if(isMobile){
  var images = document.querySelectorAll('.skill img');
  images.forEach(function(img){
      img.style.display = 'none';
  });
}
else{

  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
  });
  
  sr.reveal('.home__data, .about__container__img, .section-title', {});
  sr.reveal('.home__img, .about__container__data, .skills__container, .projects__container, .contact__container', { delay: 400 });
  sr.reveal('.home__social a, .footer__social a', { interval: 200 });
  
}


function toggleSidebar() {
  var links = document.getElementById("nav-mid-links");
  var barsIcon = document.getElementById("bars-icon");
  var linksDisplayStyle = window.getComputedStyle(links).display;

  if (linksDisplayStyle === "none") {
    links.style.display = "block";
    barsIcon.className = "fa-solid fa-x";
  } else {
    links.style.display = "none";
    barsIcon.className = "fa-solid fa-bars";
  }
}

document.getElementById("current-year").innerHTML = new Date().getFullYear();


function setActiveNavItem() {
  const navHeight = document.querySelector('.header').offsetHeight;
  const scrollPosition = window.scrollY + navHeight;
  document.querySelectorAll('.nav-mid ul li a').forEach(item => {
    const section = document.querySelector(item.getAttribute('href'));
    if (
      section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition
    ) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', setActiveNavItem);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('a[href^="#"]').forEach(item => {
          item.classList.remove('active');
      });
      this.classList.add('active');
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

var developerTypeSpan = document.getElementById("developer-type");
var developerTypes = ["Frontend", "Backend"];
var currentIndex = 0;

function typeText(text, spanElement, index) {
    if (index < text.length) {
        spanElement.textContent += text.charAt(index);
        index++;
        setTimeout(function() {
            typeText(text, spanElement, index);
        }, 250);
    } else {
        setTimeout(function() {
            deleteText(spanElement);
        }, 250); 
    }
}

function deleteText(spanElement) {
    var text = spanElement.textContent;
    if (text.length > 0) {
        text = text.slice(0, -1);
        spanElement.textContent = text;
        setTimeout(function() {
            deleteText(spanElement);
        }, 200); 
    } else {
        currentIndex = (currentIndex + 1) % developerTypes.length;
        typeText(developerTypes[currentIndex], spanElement, 0);
    }
}

typeText(developerTypes[currentIndex], developerTypeSpan, 0);

