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
		en: "I am Josué Martínez Moreno a Physical Oceanographer interested in oceanic variability and environmental issues, particularly where there is a high impact on population.",
		es:"Soy Josué Martínez Moreno, un oceanógrafo físico interesado en variabilidad oceanica y problematicas ambientales, particularmente cuando existe in alto impacto en la poblacion.",
		fr:"Je suis Josué Martínez Moreno, une océanographe physique intéressé par la variabilité océanique et les problèmes environnementaux, en particulier où le impact est élevé sur la population.",
	},
	"Text 2":{
		en:"Currently, my PhD research focuses on the effects of climate change over the oceanic kinetic energy and the distinctive mesoscale oceanic processes (eddies and jets). This research is relevant due to a possible feedbacks on oceanic heat and carbon exchange, processes that have direct consequences on the Earth's climate.",
		es:"Actualmente, mi investigación de doctorado se enfoca en los efectos del cambio climatico sobre la energia cinetica oceanica y los processos de mesosescala caracteristicos del oceano (eddies y jets). Esta investigacion es relevante debido a la posible retroalimentacions en el intercambio térmico y de carbon ocenaico ademas de factibles consecuencias en el clima terrestre.",
		fr:"Actuellement, ma recherche porte sur les effets du changement climatique sur océanique énergie cinétique et les processus océaniques distinctifs de mésoéchelle (eddies et jets). Cette recherche est pertinente pour un éventuel retour d'information sur la chaleur océanique et les échanges de carbone.",
	},
	"Text 3":{
		en:"A few years ago, some fortuitous events allowed me to teach science as a volunteer in Mexican rural communities and I loved it! This inspired me to teach as a professor assistant, a demonstrator, and also pursuit an academic career that would allow me to transfer my knowledge through teaching.",
		es:"Hace unos años, eventos fortuitos me permitieron enseñar ciencia como un voluntarion en comunidades rurales de Mexico. Esto me inspiro mi interes como ayudante de profesor, demostrador, además de una formacion academica que me permita transferir mis conocimientos a traves de la enseñansa.",
		fr:"Il y a quelques années, événements fortuits m'ont permis d'enseigner les sciences en tant que bénévole dans les communautés rurales mexicaines et j'ai adoré! Cela m'a inspiré à enseigner en tant qu'assistante de professeur, démonstratrice et à poursuivre une formation académique afin de transférer mes connaissances par le biais de l'enseignement.",
	},
	"Text 4":{
		en:"I spend my free time on random projects. Sometimes some of these projects are about coding in order to solve problems in my quotidian life, other times are more artistic like acrylic painting, handmade earrings, and photography. I constantly find new ways to learn different skills which fulfil my passion for learning. Additionally, I enjoy spending time in nature: diving, climbing, and other outside activities.",
		es:"",
		fr:"Je passe mon temps libre sur des projets aléatoires, parfois certains de ces projets concernent le codage afin de résoudre des problèmes de ma vie quotidienne, d'autres fois sont plus artistiques comme la peinture acrylique, les boucles d'oreilles faites à la main et la photographie. Je me donne constamment de nouvelles façons d’acquérir différentes compétences qui répondent à ma passion pour l’apprentissage. De plus, j'aime passer du temps dans la nature, la plongée, l'escalade et d'autres activités extérieures.",
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
