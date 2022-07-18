const letras = ["A", "a", "B", "C", "E"];
let letrasE = 0

for (let letra of letras) {
    if (letra === "e" || letra === "E") {
        letrasE++
    }
}

if (letrasE === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada')
}

if (letrasE === 1) {
    console.log(`Foi encontrada ${letrasE} letra "E" ou "e"`)
}

if (letrasE >= 2) {
    console.log(`Foram encontradas ${letrasE} letras "E" ou "e"`)
}

