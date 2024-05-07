document.getElementById("current-year").innerHTML = new Date().getFullYear();


function set_active_section() {
  const navHeight = document.querySelector('.header').offsetHeight;
  const scrollPosition = window.scrollY + navHeight;
  
  document.querySelectorAll('.nav-mid ul li a').forEach(item => {
    const section = document.querySelector(item.getAttribute('href'));
    if (
      section.offsetTop <= scrollPosition &&
      section.offsetTop + section.offsetHeight > scrollPosition
    ) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', set_active_section());


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

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});


sr.reveal('.home__data, .about__container__img, .section-title', {});
sr.reveal('.home__img, .about__container__data, .skills__container, .projects__container, .contact__container, .footer', { delay: 400 });
sr.reveal('.home__social a, .footer__social a', { interval: 200 });



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


particlesJS("particles-js", {
  "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 127.87212787212788,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
});