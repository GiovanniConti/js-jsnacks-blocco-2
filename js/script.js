
/***************************** ESERCIZIO 1 ***************************************/

/*
let mioNumero = prompt("Inserisci un numero.");


console.log(mioNumero)


if((mioNumero % 2) === 0){
    alert(mioNumero);
    
} else{
    mioNumero++;
    alert(mioNumero);
} 
*/

/***************************** ESERCIZIO 2 ***************************************/

const array1 = [15, 2, 7];
const array2 = [5];

let arrayGrande = 0;
let arrayPiccolo = 0;
let i=0;


/*
//             SOLUZIONE CON 2 CICLI WHILE

// controllo qual è l'array con minor elementi
if (array2.length < array1.length){

    // ciclo per far aggiungere elementi dell'array1 all'array2 fino a quando non avranno la stessa lunghezza
    while(array2.length < array1.length){

        console.log(array2[i])
        // valore dell'array prima del push
        console.log("array2 prima del push: ", array2)


        array2.push(array1[i])

        console.log("array2 dopo il push: ", array2)

        // incremento la i per far aggiungere l'elemento successivo dell'array1 all'array2
        i++
    }
} else{
    while(array1.length < array2.length){

        console.log(array1[i])
        // valore dell'array prima del push
        console.log("array1 prima del push: ", array1)


        array1.push(array2[i])

        console.log("array2 dopo il push: ", array1)

        // incremento la i per far aggiungere l'elemento successivo dell'array1 all'array2
        i++
    }
}
*/

if (array2.length < array1.length){
    arrayGrande = array1;
    arrayPiccolo = array2;
} else{
    arrayGrande = array2;
    arrayPiccolo = array1;
}

console.log("arrayPiccolo prima del ciclo", arrayPiccolo);
console.log("arrayGrande prima del ciclo", arrayGrande);

// ciclo per far aggiungere elementi dell'array1 all'array2 fino a quando non avranno la stessa lunghezza
while(arrayPiccolo.length < arrayGrande.length){

    console.log(arrayPiccolo[i]);
    // valore dell'array prima del push
    console.log("arrayPiccolo prima del push: ", arrayPiccolo);


    arrayPiccolo.push(arrayGrande[i]);

    console.log("arrayPiccolo dopo il push: ", arrayPiccolo);

    // incremento la i per far aggiungere l'elemento successivo dell'array1 all'array2
    i++
}

console.log(arrayPiccolo);
console.log(arrayGrande);


/***************************** ESERCIZIO 3 ***************************************/