const fnsGen = {
    toggHidden: (clase) => { document.getElementById(clase).toggleAttribute("hidden") },

    stringToHtml: (str) => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(str, 'text/html')
        return doc.body.firstChild
    },

    getUrl: () => {
        console.log(location.pathname.split('&')[1])
    },

    dataDinamica: ( data, refDom) =>{
      let auxVal = null
           if(data.target.value){
               auxVal = data.target.value
           }else if(typeof(auxVal != 'string')){
               auxVal = ''
           }else{
               auxVal = data
           }
           const auxArrDom = refDom.split('-')
           const padreDom = document.getElementById(`${auxArrDom[1]}`)
           if(padreDom){
               padreDom.innerHTML = `<${auxArrDom[0]}>${auxVal}</${auxArrDom[0]}>`
               //padreDom.innerHTML = `${auxVal}`
           }
    },


//
// bsqInputData // Inputs Data
//



    addInptFijo: (arr) => {

        return arr.reduce((acc, ite)=>{
            if(!document.getElementById(ite[1]).value){
                document.getElementById('auxAlertasVista').innerhtml= 'Faltan datos por ingresar'
            }
            return {
                ...acc,
                [ite[0]]: document.getElementById(ite[1]).value
                }
        }, {})
    },

    auxArrInptDin : (ref) => {
        const auxArr = Array.from(document.getElementsByClassName(ref))

        return auxArr.reduce((acc, ite) => {
            if(!ite.value){
                document.getElementById('auxAlertasVista').innerhtml= 'Faltan datos por ingresar'
            }
            if(ite.type == 'checkbox' && !ite.checked){
                return acc
            }
            return  acc.concat(ite.value)
        }, [])
    },


    probar: () => {
        console.log(document.cookie.user)
    },

    mensajeError: (err) => {
        // document.getElementbyid=""
        // document.getElementById('auxVistaError').innerHTML = `<p>${err}</p>`
        console.log(err)
    },

}
