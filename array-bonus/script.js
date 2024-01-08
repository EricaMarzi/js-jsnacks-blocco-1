/* 
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

/*const fridge = ['banana', 'mela', 'pera']

const table = ['ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

console.table(fridge)
console.table(table)


for (let i = 0 ; i < table.length && fridge.length !== table.length; i++) {
    
    const randomElement = Math.floor(Math.random () *100) +1
    fridge.push(randomElement)

    console.log("_______________________________________________")
    console.table(fridge)
    console.table(table)
}*/


/* 
1. Individuo quale array è più lungo e quale è più corto
2. Calcolo la differenza 
3. Genero dei numeri casuali TANTI QUANTI ne mancano al più corto per arrivare al più lungo
*/

const array1 = [5, 7];
const array2 = [3, 54, 6, 3, 23];

const shorterArray = array1.length > array2.length ? array2 : array1
const longerArray = array1.length > array2.length ? array1 : array2

while (array1.length !== array2.length) {
    const randomNumber = Math.floor (Math.random () * 100) +1
    shorterArray. push(randomNumber)
}

console.table (shorterArray)
console.table (longerArray)


