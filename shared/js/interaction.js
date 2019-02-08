// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

var slideIndex = 2;
showSlides(slideIndex);

// Next/previous controls
function moveSlides(n) {
  
  showSlides(slideIndex += n,n);
}

// Thumbnail image controls
function activeSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n,m=0) {
  var i;
  var slides = document.getElementsByClassName("researchSlide");
  var slidesid = document.getElementById("animate_out");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
    slides[slideIndex-1].id = "";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  } 
  
  slides[slideIndex-1].style.display = "block"; 
  slides[slideIndex-1].id = " animate_out";
  dots[slideIndex-1].className += " active";
}

