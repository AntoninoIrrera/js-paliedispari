

// Palindroma 


function palindrome(str) {
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const parola = document.getElementById("parola");
const bottoneParola = document.querySelector("a.btn-primary");
const paragrafoParola = document.getElementById("parola_palindroma");
//const parola = prompt("inserisci una parola");

bottoneParola.addEventListener("click", function(){

    if(palindrome(parola.value)){
        // console.log("la parola è palindroma");
        if(Number(parola.value)){
            paragrafoParola.innerHTML = "Il numero è palindromo";
        }else{
            paragrafoParola.innerHTML = "La parola è palindroma";
        }
    }else{
        if (Number(parola.value)) {
            paragrafoParola.innerHTML = "Il numero non è palindromo";
        } else {
            paragrafoParola.innerHTML = "La parola non è palidroma";
        }
        // console.log("la parola non è palindroma");
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


function getRandomNumber() {
    let numeroCasuale = Math.floor(Math.random() * 5 + 1);
    return numeroCasuale;
}

let numeroCasuale = getRandomNumber()

function isOddOrEven(numeroSomma) {


    if (numeroSomma % 2 == 0) {
        return true;
    } else {
        return false;
    }

}


bottonePariDispari.addEventListener("click", function(){
    
    let sumNumber;
    
    evenOrOddUser.value = evenOrOddUser.value.toLowerCase();

    if(evenOrOddUser.value != "pari" && evenOrOddUser.value != "dispari"){
        paragrafoPariDispari.innerHTML = "Devi inserire la parola pari o dispari"
    }else{

        if(numberUser.value > 5 || numberUser.value < 1){
            paragrafoPariDispari.innerHTML = "Inserisci i numeri in un range da 1 a 5";
        }else{
            
            sumNumber = parseInt(numberUser.value) + numeroCasuale;
            
            
   
            let risultatoPariDispari = isOddOrEven(sumNumber); 
            
            paragrafoPariDispariOutput.innerHTML = "Il numero del Computer è: " + numeroCasuale;
            
            if(evenOrOddUser.value == "pari" && risultatoPariDispari == true){
                // console.log("L'utente ha vinto");
                paragrafoPariDispari.innerHTML  = "L'utene ha vinto";
            }else if(evenOrOddUser.value == "dispari" && risultatoPariDispari == true){
                // console.log("il computer ha vinto");
                paragrafoPariDispari.innerHTML = "Il computer ha vinto";
            }else if(evenOrOddUser.value == "pari" && risultatoPariDispari == false){
                // console.log("il computer ha vinto");
                paragrafoPariDispari.innerHTML = "Il computer ha vinto";
            }else if(evenOrOddUser.value == "dispari" && risultatoPariDispari == false){
                // console.log("l'utente ha vinto");
                paragrafoPariDispari.innerHTML = "L'utene ha vinto";
            }
        
        }   
    
    }
    
})




//console.log("scelta utente: " + evenOrOddUser);
//console.log("numero utente: " + numberUser);
//console.log("generazione numero casuale: " + numeroCasuale);



//console.log("somma numeri: " + sumNumber);

//console.log("somma pari(true) o dispari(false): " + isOddOrEven()); 




