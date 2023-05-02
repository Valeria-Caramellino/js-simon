console.log("ciao");

//Genero numeri "quanti", "fino a"
const x= generaNumeri(5, 100);
console.log(x);



//creo elementi che si devono vedere nella pagina
let contenitore= createElement("h1","numeri");
let numeriContenuti= contenitore.innerText= x;
container.append(contenitore);

//si smette di vedere i numeri
let secondi = 0;

let timer = setInterval(function() {

    console.log(numeriContenuti)
    if(secondi == 30) {
        contenitore.innerText= "";
        clearInterval(timer);
         
    }else {
        console.log(secondi);
        secondi++;
    }
}, 1 * 1000);

//generiamo 5 prompt e creiamo un loro array
setTimeout(function() {
    var utenteArray=[];
    var numeri;
    while (utenteArray.length < 5) {
        numeri= parseInt(prompt ("Inserisci i numeri che ti ricordi uno alla volta!")) ;
        if(utenteArray.includes(numeri)==false && numeri!="" && numeri!=null && numeri>0 ){
            utenteArray.push(numeri);
        } 
        
    }
   console.log(utenteArray);
   console.log(numeriContenuti);

    //confrontiamo i due elementi utenteArray e numeriContenuti
    let uguale= compareArray(numeriContenuti, utenteArray);
    console.log(uguale);
    contenitore.innerText= `Ti sei ricordato questi\n numeri: ${uguale.join(" ")}`;
},11* 3000); //stampa dopo 3 secondi


// funzione di comparazione tra array riporta elemento uguale
function compareArray(array1, array2){

    let ElementoUguale = [];

    for (let i = 0; i < array1.length; i++) {
        const elemento = array1[i];
    
        if (array2.includes(elemento)) {
            ElementoUguale.push(elemento);
        }
    }

    return ElementoUguale;
}

//genero i numeri e li metto in un arrey mi assicuro che non ci siano doppioni
function generaNumeri(numeriDaGenerare, massimoNumeri) {
    let insiemeDi5Numeri = [];
    while (insiemeDi5Numeri.length < numeriDaGenerare) {
        
        let nuovoNumero = getRandomNumber(1, massimoNumeri);

        if( insiemeDi5Numeri.includes(nuovoNumero) == false ) {
            insiemeDi5Numeri.push(nuovoNumero);
        }
    }
    return insiemeDi5Numeri;
}

//funzione genera numeri
function getRandomNumber(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

//funzione creare elementi
function createElement(tagHtml, classe) {
    
    //Creiamo
    const cell = document.createElement(tagHtml);
    cell.classList.add(classe);
    return cell;

}
