const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const nav = document.querySelector('.navbar');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('navbar').style.padding = '30px 10px';
    document.getElementById('logo').style.fontSize = '25px';
  } else {
    document.getElementById('navbar').style.padding = '80px 10px';
    document.getElementById('logo').style.fontSize = '35px';
  }
}

/* 

*/
