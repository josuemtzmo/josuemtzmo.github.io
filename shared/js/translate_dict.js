var dict = {
    "ABOUT ME": {
       es: "ACERCA DE MI",
    },
    "RESEARCH": {
       es: "INVESTIGACIÓN",
    },
    "HOBBIES": {
        es: "PASATIEMPOS",
    },
    "CONTACT": {
        es: "CONTACTO",
    },
    "PHYSICAL OCEANOGRAPHER": {
        es: "OCEANÓGRAFO FÍSICO",
    },
    "HOBBYIST": {
        es: "PASATIEMPOS",
    },
    "My skills:":{
        es: "Mis habilidades:",
    },
    "Citations": {
        es: "Citas",
    },
    "Publications": {
        es: "Publicaciones",
    },
    "PHOTOGRAPHY": {
        es: "FOTOGRAFÍA",
    },
    "ANIMATION": {
        es: "ANIMACIÓN",
    },
    "OUTDOOR": {
        es: "AIRE LIBRE",
    },
    "WHERE I STUDY": {
        es: 'DONDE ESTUDIO'
    },
    "To the top!": {
        es: "Ir al inicio!",
    },
    photo_text: {
        en: "My photograph passion focus on flowers, landscapes and culture.",
        es: "Mi pasión fotográfica se enfoca en flores, paisajes y cultura."
    },
    quote: {
        en: "LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER.",
        es: "VIVE COMO SI FUERAS A MORIR MAÑANA. APRENDE COMO SI FUERAS A VIVIR SIEMPRE."
    },

  }

var _t = $('body').translate({lang: "en", t: dict});
var str = _t.g("translate");
console.log(str);

$( ".lang_selector" ).on( "click", function(ev) {
    var lang = $(this).data()['value'];
    _t.lang(lang);
    ev.preventDefault();
});

// Translate util:
// http://www.openxrest.com/translatejs/#
// How to:
// http://www.openxrest.com/translatejs/index.html