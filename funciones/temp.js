// const dataPres = import('./data.js')
const menuPanel = import('./menuPanel.js')

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
console.log(menuPanel)
      // crear Div Padre, onclick => divMenuPanelPresTexto innhtml = dataPRes.auxDisp
   const objVista = dataPres.map((ele)=>{
      return {
         tag: 'p',
         class: ['pPres'],
         attrbs: [`auxDisp=${ele.auxDisp}`],
         innHtml: ele.innHtml
      }
   })
   // add div pressTexto despues de pDips
   const mpPres = new menuPanel()
   const auxRender = menuPanel.ctrVistaMenuPanel(objVista)
         
  } 
   
window.onload = () => { 
   // document.getElementById('divBarrMi').addEventListener('click', (e) => {console.log(e.target.getAttribute('auxData'))})
   mpInitPres()
}
