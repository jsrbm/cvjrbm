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
      auxDisp: '',
      innHtml: 'Trayectoria',
   },
]
const data = {
arrvisBarraMi : [ 'Presentación', 'Datos', 'Otros'],


// {tag: 'p', clase:'pBarraMi', attrbs:['auxRef=pres'], innHtml: 'Presentación'}
arrmpBarraMiData : {
   datos: [{
         tag: 'ul',
         domPadre: 'menuPanel',
         auxId: 'ulEscuelas',
         domHijos: [
            {
               domPadre: 'ulEscuelas',
               tag: 'li',
               innHtml: 'Primaria Eudoxia Calderon Gomez anexa a la Normal de Profesores',
            },
            {
               domPadre: 'ulEscuelas',
               tag: 'li',
               innHtml: 'Secundaria Oficial No. 5 anexa a la ENSEM',
            },
            {
               domPadre: 'ulEscuelas',
               tag: 'li',
               innHtml: 'Preparatoria Cualcan, Lerma',
            },
            {
               domPadre: 'ulEscuelas',
               tag: 'li',
               innHtml: 'IPN',
            },
         ],
   }],

    
   pres:[
   {
            domPadre: 'menuPanel',
            tag: 'p',
            innHtml: `
      Nací en Toluca de Lerdo, Estado de México. Donde curse mis estudios hasta primeros semestres de Universidad.
      Habité en CDMX cursando algunos otros semestres en el IPN, seguido de iniciar como desarrollador web en una start up con compañeros.
      Actualmente resido en Lerma, Estado de México. Planeo crear una vivienda casi autosuficiente en algun area rural dentro de la proxima etapa de mi vida.
      Entusiasta del conocimiento, callado, intentando con cada accion mejorar.
      `,
            
         },
         ]
   ,
      },
// Fin de data
}
