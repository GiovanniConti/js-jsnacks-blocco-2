
const mioNumero = prompt("Inserisci un numero.");
const numPiuUno = mioNumero++;

console.log(mioNumero)
console.log(numPiuUno)
if((mioNumero % 2) === 0){
    alert(`${mioNumero}`);
    
} else{
    alert(`${numPiuUno}`);
}