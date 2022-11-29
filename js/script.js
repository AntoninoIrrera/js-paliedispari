

// Palindroma 


function palindrome(str) {
    let re = /[^A-Za-z0-9]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

const parola = document.getElementById("parola");
const bottoneParola = document.querySelector("a.btn-primary");
const paragrafoParola = document.getElementById("parola_palindroma");
//const parola = prompt("inserisci una parola");

bottoneParola.addEventListener("click", function(){

    if(palindrome(parola.value)){
        // console.log("la parola è palindroma");
        paragrafoParola.innerHTML = "La parola è palindroma";
    }else{
        // console.log("la parola non è palindroma");
        paragrafoParola.innerHTML = "La parola non è palidroma";
    }


})




// ------------------------


// pari e dispari



// const evenOrOddUser= prompt("scegli pari o dispari");
// const numberUser = parseInt(prompt("scegli un numero tra 1 e 5"));
const evenOrOddUser = document.getElementById("oddOrEven");
const numberUser = document.getElementById("numberUser");
const bottonePariDispari = document.querySelector("a.btn-secondary");
const paragrafoPariDispari = document.getElementById("pari_dispari");
const paragrafoPariDispariOutput = document.getElementById("pari_dispari_output");

bottonePariDispari.addEventListener("click", function(){

    function getRandomNumber() {

        let numeroCasuale = Math.floor(Math.random() * 5 + 1);

        return numeroCasuale;
    }

    let numeroCasuale = getRandomNumber()


    let sumNumber = parseInt(numberUser.value) + numeroCasuale;

    function isOddOrEven(){
    
    
        if(sumNumber % 2 == 0){
            return true;
        }else{
            return false;
        }
    
    }

    paragrafoPariDispariOutput.innerHTML = "Scelta utente: " + evenOrOddUser.value + " Numero utente: " + numberUser.value + " Generazione numero casuale: " + numeroCasuale + " Somma dei numeri: " + sumNumber + " Somma se è pari(true) o dispari(false): " + isOddOrEven();



    if(evenOrOddUser.value == "pari" && isOddOrEven() == true){
        // console.log("L'utente ha vinto");
        paragrafoPariDispari.innerHTML  = "L'utene ha vinto";
    }else if(evenOrOddUser.value == "dispari" && isOddOrEven() == true){
        // console.log("il computer ha vinto");
        paragrafoPariDispari.innerHTML = "Il computer ha vinto";
    }else if(evenOrOddUser.value == "pari" && isOddOrEven() == false){
        // console.log("il computer ha vinto");
        paragrafoPariDispari.innerHTML = "Il computer ha vinto";
    }else if(evenOrOddUser.value == "dispari" && isOddOrEven() == false){
        // console.log("l'utente ha vinto");
        paragrafoPariDispari.innerHTML = "L'utene ha vinto";
    }

    

})




//console.log("scelta utente: " + evenOrOddUser);
//console.log("numero utente: " + numberUser);
//console.log("generazione numero casuale: " + numeroCasuale);



//console.log("somma numeri: " + sumNumber);

//console.log("somma pari(true) o dispari(false): " + isOddOrEven()); 




