/* 
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array
*/


const arrayNumbers = parseInt(prompt("Quanti elementi dovrà contenere l'array?"))

if (isNaN(arrayNumbers) || arrayNumbers < 6  || arrayNumbers > 100) {
    alert("Devi inserire un numero, un numero più alto di 5 o un numero più basso di 100")
}
console.log(arrayNumbers)


const numbers = []

for (let i = 0 ; i < arrayNumbers; i++) {
    const randomNumber = Math.floor(Math.random () * arrayNumbers) + 1
    numbers.splice(0, 0, randomNumber)

}

console.table(numbers)