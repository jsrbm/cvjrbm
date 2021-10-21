import menuPanel from "./menuPanel.js"

const toggItem = (auxVista) => {
   const auxDom = document.getElementById(auxVista)
   auxDom.display === true ? auxDom.display = none : auxDom.display = true
}
/*
const itemsVista = (item) => {
   const arrItems = ['divPres', 'divData']
  arrItems.forEach((ele) => {
   const auxDom = document.getlElementById(ele)
   ele === item ? auxDom.display = 'block' : auxDom.display = 'none'

   })
}
*/

const mpInitPres = () => {
      // crear Div Padre, onclick => divMenuPanelPresTexto innhtml = dataPRes.auxDisp


   const opcVista ={
      auxRet: false,
      opc: dataPres.map((ele)=>{
         return {
            tag: 'p',
            clases: ['pPres'],
            attrbs: [`auxDisp=${ele.auxDisp}`],
            innHtml: ele.innHtml
         }
      })
   }

   const objVista =[{
         domPadre: 'menuPanel',
         tag: 'div',
         auxId: 'divPresInit'
         }]
   const mpPres = new menuPanel('divCentralMedio', false)
   mpPres.mpLimpiarVista('divCentralMedio', true)
   mpPres.mpInit('divCentralMedio', false)

   const auxEvento = (e) => {
            if(e.target.getAttribute('auxDisp')){
                mpPres.mpLimpiarVista('menuPanel', true)
                mpPres.crearDom(data.arrmpBarraMiData[e.target.getAttribute('auxDisp')])
             }
          }

   const auxRender = mpPres.ctrVistaMenuPanel(objVista, false, opcVista.opc, auxEvento)
         
  } 

const mpInitCode = () => {
   const opcVista ={
      auxRet: false,
      opc: dataCode.map((ele)=>{
         return {
            tag: 'a',
            clases: ['aGenVis'],
            attrbs: [`href="${ele.lnk}" target="_blank"`],
            innHtml: ele.innHtml
         }
      })
   }

   const objVista =[{
         domPadre: 'menuPanel',
         tag: 'div',
         auxId: 'divCodeInit'
         }]

   const mpCode = new menuPanel('divCentralMedio', false)
   mpCode.mpLimpiarVista('divCentralMedio', true)
   mpCode.mpInit('divCentralMedio', false)


   const auxRender = mpCode.ctrVistaMenuPanel(objVista, false, opcVista.opc)
}


const mpInitHerr = () => {
   const opcVista ={
      auxRet: false,
      opc: dataHerr.map((ele)=>{
         return {
            tag: 'a',
            clases: ['aGenVis'],
            attrbs: [`auxDisp=${ele.auxDisp}`],
            innHtml: ele.innHtml
         }
      })
   }

   const objVista =[{
         domPadre: 'menuPanel',
         tag: 'div',
         auxId: 'divHerrInit',
         }]

   const mpHerr = new menuPanel('divCentralMedio', false)
   mpHerr.mpLimpiarVista('divCentralMedio', true)
   mpHerr .mpInit('divCentralMedio', false)

   const auxEvento = (e) => {
            if(e.target.getAttribute('auxDisp')){
                mpHerr.mpLimpiarVista('menuPanel', true)
                mpHerr.crearDom(data.arrHerr[e.target.getAttribute('auxDisp')])
             }
          }

   const auxRender = mpHerr.ctrVistaMenuPanel(objVista, false, opcVista.opc, auxEvento)
}

const mpInitProy = () => {
   const opcVista ={
      auxRet: false,
      opc: dataProy.map((ele)=>{
         return {
            tag: 'a',
            clases: ['aGenVis', ...ele.clases],
            attrbs: [`auxDisp=${ele.auxDisp}`],
            innHtml: ele.innHtml
         }
      })
   }

   const objVista =[{
         domPadre: 'menuPanel',
         tag: 'div',
         auxId: 'divProyInit',
         }]

   const mpProy = new menuPanel('divCentralMedio', false)
   mpProy.mpLimpiarVista('divCentralMedio', true)
   mpProy.mpInit('divCentralMedio', false)

   const auxEvento = (e) => {
            if(e.target.getAttribute('auxDisp')){
                mpProy.mpLimpiarVista('menuPanel', true)
                mpProy.crearDom(data.arrProy[e.target.getAttribute('auxDisp')])
             }
          }

   const auxRender = mpProy.ctrVistaMenuPanel(objVista, false, opcVista.opc, auxEvento)
}
   
window.onload = () => { 
   // document.getElementById('divBarrMi').addEventListener('click', (e) => {console.log(e.target.getAttribute('auxData'))})
   mpInitPres()
   document.getElementById('pdispPres').addEventListener('click', ()=>{mpInitPres()})
   document.getElementById('navHerr').addEventListener('click', ()=>{mpInitHerr()})
   document.getElementById('navProy').addEventListener('click', ()=>{mpInitProy()})
   document.getElementById('navCode').addEventListener('click', ()=>{mpInitCode()})
}
