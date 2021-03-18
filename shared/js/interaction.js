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

var getHTML = function ( url, callback ) {

	// Feature detection
	if ( !window.XMLHttpRequest ) return;

	// Create new request
	var xhr = new XMLHttpRequest();

	// Setup callback
	xhr.onload = function() {
		if ( callback && typeof( callback ) === 'function' ) {
			callback( this.responseXML );
		}
	}

	// Get the HTML
	xhr.open( 'GET', url );
	xhr.responseType = 'document';
	xhr.send();

};

function get_google_scholar_citation(url){
  getHTML( url, function (response) {
    var price = 0
    var round = Math.round;
    var priceEls = document.getElementsByClassName("gsc_a_ac gs_ibl");
    for (var i = 0; i < priceEls.length; i++) {
      price += round(priceEls[i].innerText);
    }
    return price
  });
}

//animateSlides(slideIndex)
