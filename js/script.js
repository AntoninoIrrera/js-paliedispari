

// Palindroma 


function palindrome(str) {
    let re = /[^A-Za-z0-9]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

const parola = prompt("inserisci una parola");


if(palindrome(parola)){
    console.log("la parola è palindroma");
}else{
    console.log("la parola non è palindroma");
}


// ------------------------


// pari e dispari



const evenOrOddUser= prompt("scegli pari o dispari");
const numberUser = parseInt(prompt("scegli un numero tra 1 e 5"));


function getRandomNumber(){

    let numeroCasuale = Math.floor(Math.random() * 5 + 1);

    return numeroCasuale;
}

let numeroCasuale = getRandomNumber()

console.log("scelta utente: " + evenOrOddUser);
console.log("numero utente: " + numberUser);
console.log("generazione numero casuale: " + numeroCasuale);

let sumNumber = numberUser + numeroCasuale;

function isOddOrEven(){


    if(sumNumber % 2 == 0){
        return true;
    }else{
        return false;
    }

}

console.log("somma numeri: " + sumNumber);

console.log("somma pari(true) o dispari(false): " + isOddOrEven()); 



if(evenOrOddUser == "pari" && isOddOrEven() == true){
    console.log("L'utente ha vinto");
}else if(evenOrOddUser == "dispari" && isOddOrEven() == true){
    console.log("il computer ha vinto");
}else if(evenOrOddUser == "pari" && isOddOrEven() == false){
    console.log("il computer ha vinto");
}else if(evenOrOddUser == "dispari" && isOddOrEven() == false){
    console.log("l'utente ha vinto");
}

