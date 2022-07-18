const nomes = ["Ana", "Joana", "Carlos", "amanda", "Abraao"];
let outroArray = []

for(let nome of nomes) {
    if(nome[0] == "a" || nome[0] == "A") {
        outroArray.push(nome)
    }
}

console.log(outroArray)