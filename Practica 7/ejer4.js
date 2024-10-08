const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroCorrecto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

console.log("¡Adivina el número entre 1 y 100!");

const preguntarNumero = () => {
    rl.question('Introduce tu número: ', (respuesta) => {
        const intento = parseInt(respuesta, 10);
        intentos++;

        if (intento < numeroCorrecto) {
            console.log("El número es mayor.");
            preguntarNumero();
        } else if (intento > numeroCorrecto) {
            console.log("El número es menor.");
            preguntarNumero();
        } else {
            console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
            rl.close();
        }
    });
};

preguntarNumero();
