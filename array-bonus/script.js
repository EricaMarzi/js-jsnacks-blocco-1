/* 
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

const fridge = ['banana', 'mela', 'pera']

const table = ['ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

console.table(fridge)
console.table(table)


for (let i = 0 ; i < table.length && fridge.length !== table.length; i++) {
    
    const randomElement = Math.floor(Math.random () *100) +1
    fridge.push(randomElement)

    console.log("_______________________________________________")
    console.table(fridge)
    console.table(table)
}


