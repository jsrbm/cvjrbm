// const dataPres = import('./data.js')
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
            class: ['pPres'],
            attrbs: [`auxDisp=${ele.auxDisp}`],
            innHtml: ele.innHtml
         }
      })
   }

const objVista =[{
         domPadre: 'menuPanel',
         tag: 'p',
         class: ['pPres'],
         attrbs: [`auxDisp=pres`],
         innHtml: 'vista ' 
         }]
   // add div pressTexto despues de pDips
   const mpPres = new menuPanel('divCentralMedio', false)


   const auxEvento = (e) => {
            if(e.target.getAttribute('auxDisp')){
                mpPres.mpLimpiarVista('menuPanel', true)
                mpPres.crearDom(data.arrmpBarraMiData[e.target.getAttribute('auxDisp')])
             }
          }

   const auxRender = mpPres.ctrVistaMenuPanel(objVista, false, opcVista.opc, auxEvento)
         
  } 
   
window.onload = () => { 
   // document.getElementById('divBarrMi').addEventListener('click', (e) => {console.log(e.target.getAttribute('auxData'))})
   mpInitPres()
}
