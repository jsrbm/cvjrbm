// Iniciar Clase / 
export default class menuPanel {

   constructor(domPadre, opcRet = true){  
   
        const genOpc = { 
         vista: {
            mpVistaPadre: 'mpVista',

            vistaBarraOpciones: [{ 
                           domPadre: 'mpVista',
                           tag: 'div',
                           auxId: 'vmpOpcionesVista',
                           // evento: (clase = 'cbxCrearFichaUsuario') => {console.log((clase))},
                           domHijos: [{
                              domPadre: 'vmpOpcionesVista',
                              auxId: 'vmpOpcionesReturn',
                              tag:'p',
                              innHtml: 'regresar'
                              }],
                           }],
            vistaOpciones: [{
               domPadre: 'vmpOpcionesVista',
               tag: 'div',
               auxId: 'vmpOpciones',
               domHijos:[{domPadre: 'vmpOpciones',
                           tag: 'p',
                           innHtml: 'opcion1'}]
                           }],
            iniVista: [{
               ctrData: false,
               domPadre: 'mpVista',
               tag: 'p',
               auxId: null,
               auxClases: null,
               auxAttrbs: null,
               innHtml: 'proyectoCompendio - menuPanel'
            }],
            preVista: '<p>sin Datos</p>',
            },
         data: {
            tempData: {}, // server Data - localMemoria
         },
         }
   
   this.opciones = {...genOpc}
   document.getElementById(domPadre).appendChild(fnsGen.stringToHtml('<div id="mpVista"></div>'))
   this.mpVistaOpciones(opcRet)
   document.getElementById(domPadre).appendChild(fnsGen.stringToHtml('<div id="menuPanel"></div>'))
   }


// params = getServrData
//              let dataTemp
// constructor -> getDataAttrb=  dataInp.value || dataInp.attrb => onClick = return this.vista
// vista inicial = params domPadre = 'divAuxMenuPanel'
// .getHtml
// Hacer inpDinamico / fijo rellenarObj Data 
// pasarlo desde params ele.attrbsData= ['attrIdUsuarioGenerico="bob"','attrToken="xyz"'] on click return attrbData  
// return Data // saveDataTemp => genData[ruta] = temp
// asignar js

// vista Inicial(NewState)

//
// bsqVistasMetodos
//

mpVistaOpciones(auxRet = true, paramOpc = null){
      
   const vistaBarraOpciones = [{ 
                        domPadre: 'mpVista',
                        tag: 'div',
                        auxId: 'vmpOpcionesVista',
                        // evento: (clase = 'cbxCrearFichaUsuario') => {console.log((clase))},
                        }]
         
   this.crearDom(vistaBarraOpciones)
if(auxRet){
   const auxRegresar = [{
         domPadre: 'vmpOpcionesVista',
         auxId: 'vmpOpcionesReturn',
         tag:'p',
         innHtml: 'regresar'
      }]
      this.crearDom(auxRegresar)
}

if(paramOpc){
   
   const setOpc = paramOpc.map((ele) => {
      return { ...ele, domPadre: 'vmpOpciones'}
   })

   const vistaOpciones = [{
         domPadre: 'vmpOpcionesVista',
         tag: 'div',
         auxId: 'vmpOpciones',
         domHijos: setOpc,
      }]
	this.crearDom(vistaOpciones)
}
   
   return 
}
mpIniVistaSet(auxPreVista){
   this.vista.preVista = document.getElementById('auxPreVista').firstChild 
   this.vista.inivista.appendChild('x')
}

// bsqUtilidades

mpLimpiarVista(auxId = this.vista.mpVistaPadre, toda = false){
   if(toda){
      while(document.getElementById(auxId).children[0]){
      document.getElementById(auxId).removeChild(document.getElementById(auxId).lastChild)}
      }  else {
   while(document.getElementById(auxId).children[1]){
      document.getElementById(auxId).removeChild(document.getElementById(auxId).lastChild)}
      }

}


asgVistaDom(auxPadre, ele, evento=null){
      document.getElementById(auxPadre).appendChild(fnsGen.stringToHtml(ele))
      if(evento){
      document.getElementById(auxPadre).addEventListener('click', (e) => {evento(e)})
   }
}

fnVistaTagReduce(auxObj, auxArr=[]){ 
// if ele.tipo = entradaData -> attrbs value ¡innhtml?
// if ele.tipo = salidaData -> inner html - div - p estructura

    return auxObj.reduce( (acc, ele) => {
         
      if(ele.ctrData){
              const auxStr = `
                      <div class="parFormulario">
                      <label for="${ele.auxId}">${ele.label}</label>
                      <${ele.tag} ${ele.auxId} ${ele.auxClases ? 'class="'+ele.auxClases.join(' ')+'"' : ''} ${ele.auxAttrbs ? ele.auxAttrbs.join(' ') : ''}> </${ele.tag}>
                      </div>`
          acc.push({domPadre: ele.domPadre, vista: auxStr, evento: ele.evento} )
      }
      
      if (ele.tag === 'div'){
         const auxStr = `
            <div id="${ele.auxId}" ${ele.auxClases ? 'class="'+ele.auxClases.join(' ')+'"' : ''} ${ ele.attrbs ? ele.attrbs.join(' ') : ''}></div>`
            acc.push({domPadre: ele.domPadre, vista: auxStr, evento: ele.evento})
      }
      if(!ele.ctrData && ele.tag != 'div'){
            const auxStr = `<${ele.tag} ${ele.auxId ? 'id="'+ele.auxId+'"' : ''} ${ele.auxClases ? 'class="'+ele.auxClases.join(' ')+'"' : ''} ${ ele.attrbs ? ele.attrbs.join(' ') : ''}>${ele.innHtml ? ele.innHtml: ''}</ ${ele.tag}>` 
       acc.push({domPadre: ele.domPadre, vista: auxStr, evento: ele.evento} )
            }
    if(ele.domHijos){
            acc = this.fnVistaTagReduce(ele.domHijos, acc)
            }
    return acc        
   }, auxArr)
}


crearDom(auxObjVista){
        const arrVista = this.fnVistaTagReduce(auxObjVista, []) 
        arrVista.forEach((ele, i) => { 
              this.asgVistaDom(ele.domPadre, ele.vista, ele.evento)
          })
		
}

// bsqFnVista

ctrVistaMenuPanel(objVista, auxRetOpc, opc, evento=null, idPreVista = 'menuPanel', auxVistaData = 'mpVista'){

   if(evento){document.getElementById(auxVistaData).addEventListener('click', (e)=>{evento(e)})}

   this.crearDom(objVista)
   this.mpVistaOpciones(auxRetOpc, opc)

/* Return / salir menuPanel
     document.getElementById('vmpOpcionesReturn').addEventListener('click', ()=>{
            this.mpLimpiarVista(idPreVista)
            document.getElementById(idPreVista).style.display = 'block'
         })
         */
   }

async ctrVistaDataMenuPanel(idPreVista = 'menuPanel', objVista, auxDataClass){

   document.getElementById('menuPanel').style.display = 'none'
   // document.getElementById('mpPreTemplate').appendChild(auxPreVista)
   this.mpLimpiarVista('mpVista')
   this.mpVistaOpciones()
	this.crearDom(objVista)
   const auxPromData = new Promise(function(resolve, reject){ 
        document.getElementById('vmpOpcionesReturn').addEventListener('click', ()=>{
         resolve(fnsGen.auxArrInptDin(auxDataClass)) })
         
      })
      
   const auxData = await auxPromData.then(x => {
         this.mpLimpiarVista('mpVista')
         // document.getElementById('mpVista').appendChild(auxPreVista)
         document.getElementById('menuPanel').style.display = 'block'
         return x
         })
   return auxData

}



}// Fin de Clase
