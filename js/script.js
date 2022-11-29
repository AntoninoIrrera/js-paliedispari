

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


