function myFunction() {
    var x = document.getElementById("mynav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function closeNav() {
    var x = document.getElementById("mynav");
    if (x.className.includes("responsive")) {
        x.className = "nav";  // Reset class to original state
    }
}
const texts = ["Ankit Ambasta ", "a Software Engineer..", "a Full-Stack Developer..", "a Database Specialist.."];
let index = 0;

function changeText() {
    const span = document.getElementById('homespan');
    if (span) {
        span.textContent = texts[index];
        index = (index + 1) % texts.length;
    }
}


const homeImg = document.querySelector('.homeimg');

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {

        homeImg.classList.add('shake');
    } else {

        homeImg.classList.add('shake');
    }


    setTimeout(function () {
        homeImg.classList.remove('shake');
    }, 500);

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

setInterval(changeText, 3000);


const scriptURL = 'https://script.google.com/macros/s/AKfycbwsP60XQ3YH8qaae8y56YeyjxPLqRHoFrlnYFcUyxWBADQ4KeEEw--QWT8xWbpfbPcr/exec'

const form = document.forms['contactform']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for reaching me out. "))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

window.addEventListener('scroll', function () {
    const outers = document.querySelectorAll('.outer');

    outers.forEach(outer => {
        const rect = outer.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible && !outer.classList.contains('animated')) {
            const percentage = outer.style.getPropertyValue('--percentage');

            outer.classList.add('animated'); 

            outer.style.background = `conic-gradient(#f900f9 ${percentage}%, whitesmoke ${percentage}%)`;
        }
    });
});





document.querySelectorAll('.smoothtransition').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        if (targetSection) {
            
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




