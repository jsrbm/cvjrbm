const dataPres = [
   {
      auxDisp: 'pres',
      innHtml: 'Presentación',
   },
   {
      auxDisp: 'datos',
      innHtml: 'Datos Personales',
   },
   {
      auxDisp: 'tray',
      innHtml: 'Trayectoria',
   },
]
const dataInitPres = [
   {
      domPadre: 'menuPanel',
      tag:'div',
      auxId: 'divInitPres', 
      clases: [],
      domHijos: [
         {
            domPadre: 'divInitPres',
            tag:'p',
            clases:[],
               innHtml: '¿Requires un desarrollador?, Contáctame, hago paginas más bonitas, pero esta me gusta ;)'
         },
         {
            domPadre: 'divInitPres',
            tag:'p',
            clases:[],
               innHtml: 'Contacto:'
         },
         {
            domPadre: 'divInitPres',
            tag:'p',
            clases:[],
            innHtml: 'e-mail: drentoluca2@gmail.com'
         },
         {
            domPadre: 'divInitPres',
            tag:'p',
            clases:[],
            innHtml: 'WhatsApp: 729 247 1337' 
         },
         {
            domPadre: 'divInitPres',
            tag:'div',
            auxId: 'divMuestrario',
            clases: [],
            domHijos: [
               {
                  domPadre: 'divMuestrario',
                  tag: 'div',
                  auxId: 'divMuestrarioPostres',
                  clases: ['genMuestrario'],
                  domHijos: [
                        {
                           domPadre: 'divMuestrarioPostres',
                           tag:'p',
                           clases:['btnPostres'],
                           innHtml: 'Pasteles' 
                        },
                        {
                           domPadre: 'divMuestrarioPostres',
                           tag:'p',
                           clases:['btnPostres'],
                           innHtml: 'Galletas' 
                        },
                        {
                           domPadre: 'divMuestrarioPostres',
                           tag:'p',
                           clases:['btnPostres'],
                           innHtml: 'Pays' 
                        },
                        {
                           domPadre: 'divMuestrarioPostres',
                           tag:'p',
                           clases:['btnPostres'],
                           innHtml: 'Pan' 
                        },
                     ], // Fin Listado Postres
               },
              { 
                  domPadre: 'divMuestrario',
                  tag: 'div',
                  auxId: 'divMuestrarioMuebles',
                  clases: ['genMuestrario'],
                  domHijos: [
                        {
                           domPadre: 'divMuestrarioMuebles',
                           tag:'p',
                           clases:[],
                           innHtml: 'Muebles' 
                        },
                        ]
               },
              { 
                  domPadre: 'divMuestrario',
                  tag: 'div',
                  auxId: 'divMuestrarioGen',
                  clases: ['genMuestrario'],
                  domHijos: [
                        {
                           domPadre: 'divMuestrarioGen',
                           tag:'p',
                           clases:[],
                           innHtml: 'generico' 
                        },
                        ]
               },

            ] // Fin Hijos Muestrario
         },
         ] // Fin divInitPresHijos
   }
   ]

const dataHerr = [
   {
      auxDisp: 'mp',
      clases: ['btnGenerico'],
      innHtml: 'menuPanel',
   }
]
const dataProy = [
   {
      auxDisp: 'prCom',
      clases: ['btnGenerico'],
      innHtml: 'proyectoCompendio',
   }
]
const dataCode = [
   {
      innHtml: 'this.repo',
      clases: ['btnGenerico'],
      lnk: 'https://github.com/jsrbm/cvjrbm',
   },
   {
      innHtml: 'herramientas.repo',
      clases: ['btnGenerico'],
      lnk: 'https://github.com/jsrbm/',
   },
]

const data = {
arrmpBarraMiData : {
   datos: [{
   tag: 'div',
   domPadre: 'menuPanel',
   auxId: 'divDatosPersonales',
   domHijos:[
      {
         tag: 'ul',
         domPadre: 'divDatosPersonales',
         auxId: 'ulEscuelas',
         domHijos: [
            {
               domPadre: 'ulEscuelas',
               tag: 'li',
               clases: ['liTitulo'],
               innHtml: 'Escolaridad',
            },
            {
               domPadre: 'ulEscuelas',
               tag: 'li',
               innHtml: 'Primaria: Eudoxia Calderon Gomez anexa a la Normal de Profesores',
            },
            {
               domPadre: 'ulEscuelas',
               tag: 'li',
               innHtml: 'Secundaria: Oficial No. 5 anexa a la ENSEM',
            },
            {
               domPadre: 'ulEscuelas',
               tag: 'li',
               innHtml: 'Preparatoria:  Cualcan, Lerma',
            },
            {
               domPadre: 'ulEscuelas',
               tag: 'li',
               innHtml: 'Universidad: IPN -Lic. Fisica y Matemáticas (3 semestres)',
            },
            {
               domPadre: 'ulEscuelas',
               tag: 'li',
               innHtml: `Platzi: Cursos Basico e Intermedio (Programacion funcional, promesas, API's)`,
            },
            {
               domPadre: 'ulEscuelas',
               tag: 'li',
               innHtml: `Udemy: Cursos React-Redux, Angular, Arduino, Vercel, API's, Firebase.`,
            },
         ],
   },
   // Fin de Escuelas
   {
      domPadre: 'divDatosPersonales',
      tag: 'ul',
      auxId: 'ulDireccion',
      domHijos: [
         {
               domPadre: 'ulDireccion',
               tag: 'li',
               clases: ['liTitulo'],
               innHtml: 'Direccion:',
         },
         {
               domPadre: 'ulDireccion',
               tag: 'li',
               innHtml: 'Lerma de Villada, Estado de México, México. CP: 52000',
         },
      ],
   },

   {
      domPadre: 'divDatosPersonales',
      tag: 'ul',
      auxId: 'ulHobbies',
      domHijos: [
         {
               domPadre: 'ulHobbies',
               tag: 'li',
               clases: ['liTitulo'],
               innHtml: 'Hobbies',
         },
         {
               domPadre: 'ulHobbies',
               tag: 'li',
               innHtml: 'Viajar en Bicicleta',
         }
      ],
   }, // Fin de Hobbies
   ] // Fin de divDatosPersonales
   
   }],

    
   pres:[
      {
         domPadre: 'menuPanel',
         tag: 'p',
         clases: ['divPresTexto'],
         innHtml: `
            Entorno explorado, usual y conocido:
            <br/>
            Vercel, React, jQuery, mySql, express, Nodejs, Mongoose, JsonWebToken...
            <br/><br/>
            Entorno poco explorado pero conocido:
            <br/>
            Angular, Firebase, Redux
            <br/>
            <br/>
            Hobbies:
            <br/>
            C++, Phyton.
            <br/><br/>
            Acerca de mi:
            <br/>
            Entusiasta de la informatica, a finales de primaria inicie un curso de computacion, pasé muchas tardes de secundaria animando en Flash Player, hice una pagina en Dreamweaver, ediciones con photoshop y algunos programas con visual basic.
            <br/>
            Mi primer acercamiento serio a Javascript fue con un curso de platzi, (3años aprox) debido al inicio de un proyecto entre compañeros para un negocio hicimos una pagina HTML/JS/PHP. Decidí entonces continuar dedicando mi tiempo a Javascript por la versatilidad que senti en su uso.
            <br/>
            De oportunidad en oportunidad, mi conocimiento se amplio, ahora hago proyectos personales de maquinas herramientas con arduino y diversas chucherias.
            <br/>
            Ademas realizo distintas herramientas web que me parecen utiles para proyectos futuros y proyectos en desarrollo.
            Aspiro una oportunidad en el desarrollo web profesional para agilizar sustanciablemente mis habilidades.

         `,
            
      },
         ],
   tray:[
   {
            domPadre: 'menuPanel',
            tag: 'p',
            clases: ['pTray'],
            innHtml: `
            Diferentes e-Commerce, Pagina de Logistica con API Google Maps
      `,
            
         },
         ],
   
      }, // Fin de Data Presentacion
      
      arrHerr: {
         mp: [{ // Inicio de Data Herr
               domPadre: 'menuPanel',
               tag: 'p',
               innHtml: `
                  archivoMenuPanel
               `
            }
         ],
      }, // Fin de Data Herr

      arrProy: {
         prCom: [{ // Inicio de Data proyectos
               domPadre: 'menuPanel',
               tag: 'p',
               innHtml: `
                 proyectoCompendio 
               `
            }
         ],
      } // Fin de Data Herr
      
// Fin de data
}
