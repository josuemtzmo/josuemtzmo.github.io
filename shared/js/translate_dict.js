var dict = {
	"About me": { 
	   es: "Acerca de mi",
	   fr: "Un pue de moi",
	},
	"Research": {
       es: "Investigación",
	   fr: "Recherche",
    },
	"Hobbies": {
        es: "Pasatiempos",
		fr: "Loisirs",
	},
	"Contact": {
        es: "Contacto",
		fr: "Contact",
    },
    "ABOUT ME": {
       es: "ACERCA DE MI",
	   fr: "UN PEU DE MOI",
    },
    "RESEARCH": {
       es: "INVESTIGACIÓN",
	   fr: "RECHERCHE",
    },
    "HOBBIES": {
        es: "PASATIEMPOS",
		fr: "LOISIRS",
    },
    "CONTACT": {
        es: "CONTACTO",
		fr: "CONTACT",
    },
    "PHYSICAL OCEANOGRAPHER": {
        es: "OCEANÓGRAFO FÍSICO",
		fr: "OCÉANOGRAPHE PHYSIQUE",
    },
    "HOBBYIST": {
        es: "PASATIEMPOS",
		fr: "HOBBYIST",
    },
    "My skills:":{
        es: "Mis habilidades:",
		fr: "Mes compétences",
    },
    "Citations": {
        es: "Citas",
		fr: "Citations",
    },
    "Publications": {
        es: "Publicaciones",
		fr: "Publications",
    },
    "PHOTOGRAPHY": {
        es: "FOTOGRAFÍA",
		fr: "PHOTOGRAPHIE",
    },
    "ANIMATION": {
        es: "ANIMACIÓN",
		fr: "ANIMATION",
    },
    "OUTDOOR": {
        es: "AIRE LIBRE",
		fr: "ACTIVITÉ PHYSIQUE"
    },
    "WHERE I STUDY": {
        es: "DONDE ESTUDIO",
		fr: "OÙ J'ÉTUDIE"
    },
    "To the top!": {
        es: "Ir al inicio!",
		fr: "Allez au début!",
    },
    photo_text: {
        en: "My photograph passion focus on flowers, landscapes and culture.",
        es: "Mi pasión fotográfica se enfoca en flores, paisajes y cultura.",
		fr: "Mes passion pour la photographie est les fleurs, les paysages et la culture"
    },
    quote: {
        en: "LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER.",
        es: "VIVE COMO SI FUERAS A MORIR MAÑANA. APRENDE COMO SI FUERAS A VIVIR SIEMPRE.",
		fr: "VIS COMME SI TU DEVAIS MOURIR DEMAIN. APPRENDS COMME SI TU DEVAIS VIVRE TOUJOURS",
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
