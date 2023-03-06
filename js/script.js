const lista = [ ]
let contantore = 0;
let contatore2 = 0;
let NuovoEl;
let pallinoEl;
let BottoneSvuotaEl = document.getElementById ('svuota')
let bottoneaddEl = document.getElementById ('add')
let bottoneSendEl= document.getElementById('send')
let quantitaDaInserire = document.getElementById ('quantita')


BottoneSvuotaEl.classList.add ('d-none')
bottoneaddEl.classList.add ('d-none')
bottoneSendEl.classList.add ('d-none')

let ListaEl = document.getElementById ('lista-spesa')
let BottoneEl = document.getElementById ('bottone-aggiungi')

BottoneEl.addEventListener ('click' , function() {

    let articoloDaAggiungereEl = document.getElementById ('articolo-da-inserire')
    lista.push (articoloDaAggiungereEl.value)

    articoloDaAggiungereEl.value = ''

    while ( contantore != lista.length) {
    
        NuovoEl = document.createElement ('li')
        ListaEl.append(NuovoEl)
        ListaEl.classList.add ('elimina')
        if ( quantitaDaInserire.value != 1) {

            NuovoEl.innerText =(lista[contantore]) + ' x' + quantitaDaInserire.value
            quantitaDaInserire.value = '1'

        } else {
            
            NuovoEl.innerText =(lista[contantore])
        }

        BottoneSvuotaEl.classList.remove ('d-none')
        bottoneaddEl.classList.remove ('d-none')
        bottoneSendEl.classList.remove ('d-none')
        
        contantore++
    }
})

BottoneSvuotaEl.addEventListener ('click' , function() {

        ListaEl.innerHTML = ('')

        BottoneSvuotaEl.classList.add ('d-none')
        bottoneaddEl.classList.add ('d-none')
        bottoneSendEl.classList.add ('d-none')

        lista.length = 0
        contantore = 0

})





// let quantitaDaInserire = parseInt (prompt('quanti articoli vuoi aggiungere?'));

//     // while (isNaN (quantitaDaInserire) ) {
//     //     alert ('igonrante')
//     //     quantitaDaInserire = parseInt (prompt('quanti articoli vuoi aggiungere?'));
//     // }

//     if (quantitaDaInserire != 0 ){
//     while  (contatore2 != quantitaDaInserire) {
//         let nuovoElSpesa = prompt('inserisci un ulteriore articolo alla lista ')
//         lista.push(nuovoElSpesa)
//         contatore2++;
    
//     }
//         while ( contantore != lista.length) {
        
//             console.log (lista[contantore])

//             let NuovoEl = document.createElement ('li')
//             ListaEl.append(NuovoEl)
//             NuovoEl.innerText =(lista[contantore])
//             // document.writeln  (lista[contantore])

        
//             contantore++
//         }
    
// } else {
//     document.writeln('non hai aggiunto elementi alla tua lista quindi puoi rimanere a casa che non ti manca nulla')
// }


