// Modal Image Gallery
function displayModal(element) {
  var image = document.getElementById("img01");
  var modal = document.getElementById("modal01");
  var captionText = document.getElementById("caption");

  image.src = element.src;
  modal.style.display = "block";
  modal.style.zIndex = "10";
  
  captionText.innerHTML = element.alt;

  image.animate([{ opacity: "1" },], {duration: 500, fill:"forwards"})
  modal.animate([{ opacity: "1" },], {duration: 500, fill:"forwards"})
  captionText.animate([{ opacity: "1" },], {duration: 500, fill:"forwards"})

}

function hideModal(element) {
  var image = document.getElementById("img01");
  var modal = document.getElementById("modal01");
  var captionText = document.getElementById("caption");
  
  image.animate([{ opacity: "0" },], {duration: 300, fill:"forwards"})
  modal.animate([{ opacity: "0" },], {duration: 300, fill:"forwards"})
  captionText.animate([{ opacity: "0" },], {duration: 300, fill:"forwards"})

  setTimeout(function() {
    element.style.display='none'
  }, 300)
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
  document.getElementById("menuIcon").className = "fa fa-remove fa-fw";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
  document.getElementById("menuIcon").className = "fa fa-bars fa-fw";
}


function w3_lang() {
  document.getElementById("myLangmenu").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
  document.getElementById("LangIcon").className = "fa fa-remove fa-fw";
	document.getElementById("lang-button").setAttribute( "onClick", "w3_lang_close();" );
}

function w3_lang_close() {
  document.getElementById("myLangmenu").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
  document.getElementById("LangIcon").className = "fa fa-language fa-fw";
	document.getElementById("lang-button").setAttribute( "onClick", "w3_lang();" );
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
  
  // slides[slideIndex-1].style.display = "block"; 
  // slides[slideIndex-1].id = " animate_out";
  // dots[slideIndex-1].className += " active";
}


function showSlides_anim(n,m=0) {
  var i;
  var slides = document.getElementsByClassName("researchSlide_anim");
  var slidesid = document.getElementById("animate_out");
  var dots = document.getElementsByClassName("dot_anim");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
    slides[slideIndex-1].id = "";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  } 
  
  // slides[slideIndex-1].style.display = "block"; 
  // slides[slideIndex-1].id = " animate_out";
  // dots[slideIndex-1].className += " active";
}

var slideIndex = 1;
showSlides_anim(slideIndex);

// Next/previous controls
function moveSlides_anim(n) {
  showSlides_anim(slideIndex += n,n);
}

// Thumbnail image controls
function activeSlide_anim(n) {
  showSlides_anim(slideIndex = n);
}

//function animateSlides(n,m=0) {
//  setTimeout(function(){
//      var slideIndex= getRndInteger(1,5);
//	  animateSlides(slideIndex);
//	  var i;
//	  var slides = document.getElementsByClassName("researchSlide_anim");
//	  var slidesid = document.getElementById("animate_out");
//	  if (n > slides.length) {slideIndex = 1}
//	  if (n < 1) {slideIndex = slides.length}
//
//	  for (i = 0; i < slides.length; i++) {
//		slides[i].style.display = "none";
//		slides[slideIndex-1].id = "";
//	  }
//
//	  slides[slideIndex-1].style.display = "block";
//	  slides[slideIndex-1].id = " animate_out";
//  }, 10000);
//}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var continue_click = document.getElementById('continue_click');
if (continue_click){
  continue_click.style.cursor = 'pointer';
  continue_click.onclick = function() {
      $('html, body').animate({ scrollTop: $(window).height()-50}, 'slow');
      document.body.style.overflow = 'visible';
  };    
}