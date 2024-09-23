const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Ingrese su edad:`, (edad) => {
    if (edad < 12) {
        console.log(`es un niño`)
    } else if (edad >= 13 && edad < 17) {
        console.log(`es un adolescente`)
    } else if (edad >= 18 && edad < 35) {
        console.log(`es un adulto joven`)
    } else if (edad >= 36 && edad < 59) {
        console.log(`es un adulto joven`)
    } else {
        console.log(`Es un adulto mayor`)

    }
    rl.close()
})