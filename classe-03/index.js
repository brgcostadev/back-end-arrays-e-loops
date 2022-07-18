const numeros = [54, 22, 14, 87, 284];
let existeNumeroDez = false

for(let i=0; i < numeros.length; i++) {
    if(numeros[i] === 10) {
        existeNumeroDez = true
        console.log(`3`)
        break
    }
}

if(!existeNumeroDez) {
    console.log(`-1`)
}

