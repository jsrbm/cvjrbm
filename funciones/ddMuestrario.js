const fnAnimacionDestapar = (idDom, magnitud, direccion) => {
   const auxDom = document.getElementById(idDom)
   if(auxDom.getAttribute('animado')){return}
   auxDom.setAttribute('animado', true)  
   let auxIdInterval = null
   let pos = 150


   clearInterval(auxIdInterval)
   auxIdInterval = setInterval(frame, 5)
   function frame(){
      if(pos === magnitud){
            clearInterval(auxIdInterval)
            auxDom.removeAttribute('animado')
         } else {
             pos--
             auxDom.style.height = pos + "px"
             auxDom.style.width = '100%'
         }
   }

}

const fnsDD = {
   fnDestapar: () => {
      fnAnimacionDestapar('ddTapa1', 0, 'top') 
      fnAnimacionDestapar('ddTapa2', 0, 'bottom') 
      document.getElementById('ddTapa1').display = "none"
   }
}

export default fnsDD
