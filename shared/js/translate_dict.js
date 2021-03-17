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
		fr: "Mes passion pour la photographie est les fleurs, les paysages et la culture",
		ch:"",
    },
    quote: {
        en: "LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER.",
        es: "VIVE COMO SI FUERAS A MORIR MAÑANA. APRENDE COMO SI FUERAS A VIVIR SIEMPRE.",
		fr: "VIS COMME SI TU DEVAIS MOURIR DEMAIN. APPRENDS COMME SI TU DEVAIS VIVRE TOUJOURS",
		
    },
	"Text 1": {
		en: "I grew up in Mexico City, where I studied Earth Scinces at the National Autonomous University of Mexico. Afterwards, I moved to Canberra, Australia, where I started and continue doing my Ph.D. at the Australian National University under the supervision of <a class='download_links'  href='https://earthsciences.anu.edu.au/people/academics/prof-andy-hogg'>Andy Hogg<\a> on ocean variability, in particular, variability of ocean eddies with scales between 10 to 100 km. On September 2021, I will start a postdoctoral fellow with <a class='download_links' href='https://annuaire.ifremer.fr/cv/17781/'>Camille Lique<\a> at IFREMER, Brest, France, to work on sea-ice interactions and ocean heat fluxes.",
		es: "Crecí en la Ciudad de México, donde estudie Ciencias de la Tierra en la Universidad Nacional Autónoma de México. Después, me mude a Canberra, Australia, donde comencé y continuo estudiando my doctorado en la Universidad Nacional Australiana bajo la supervision de <a class='download_links'  href='https://earthsciences.anu.edu.au/people/academics/prof-andy-hogg'>Andy Hogg<\a> en variabilidad oceanica, en particular, variabilidad de eddies oceanicos con escalas de 10 a 100 km. En Septiembre 2021, comenzaré un postdoctorado con <a class='download_links' href='https://annuaire.ifremer.fr/cv/17781/'>Camille Lique<\a> en IFREMER, Brest, Francia, trabajando en interacciones oceano-hielo y flujos the calor.",
		fr: "J'ai grandi à Mexico, où j'ai étudié les sciences de la terre à l'Université nationale autonome du Mexique. Ensuite, j'ai déménagé à Canberra, en Australie, où j'ai commencé et je continue à faire mon doctorat. à l'Université nationale australienne sous la supervision de <a class='download_links' href='https://earthsciences.anu.edu.au/people/academics/prof-andy-hogg'> Andy Hogg <\a> sur l'océan la variabilité, en particulier la variabilité des eddies océaniques à des échelles comprises entre 10 et 100 km. En septembre 2021, je commencerai un post-doctorant avec <a class='download_links' href='https://annuaire.ifremer.fr/cv/17781/'> Camille Lique <\a> à l'IFREMER, Brest, France, travailler sur les interactions glace-mer et les flux de chaleur océanique.",
	},
	"Text 2":{
		en: "",
		es: "",
		fr: "",
	},
	"Text 3":{
		en: "",
		es: "",
		fr: "",
	},
	"Text 4":{
		en: "Download my <a class='download_links' href=../documents/JMM_CV_ENG.pdf>vitae (CV)<\a> or read more about <a class='download_links' href=#research >my research<\a>.",
		es: "Descarga mi <a class='download_links' href=../documents/JMM_CV_ESP.pdf>curriculum (CV)<\a> o lee más sobre <a class='download_links' href=#research >mi investigación<\a>.",
		fr: "Télécharger ma <a class='download_links' href=../documents/JMM_CV_FRA.pdf>vitae (CV)<\a> ou lire plus sur <a class='download_links' href=#research >mes recherches<\a>.",
	},

  "Proj_1":{
		en: "",
		es: "",
		fr: "",
	},

  "Proj_2":{
		en: "",
		es: "",
		fr: "",
	},

  "Interest_1":{
		en: "",
		es: "",
		fr: "",
	},

  "To_top":{
		en: "",
		es: "",
		fr: "",
	},

  "example":{
		en:"",
		es:"",
		fr:"",
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
