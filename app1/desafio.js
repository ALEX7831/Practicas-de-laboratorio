const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarVocalesYNumeros(cadena) {
  const vocales = 'aeiouAEIOU';
  let contadorVocales = 0;
  let contadorNumeros = 0;

  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
      contadorVocales++;
    } else if (!isNaN(cadena[i])) {
      contadorNumeros++;
    }
  }

  return { vocales: contadorVocales, numeros: contadorNumeros };
}

rl.question('Ingrese una cadena de texto: ', (cadena) => {
  while (!cadena.trim()) {
    console.log('Por favor, ingrese una cadena no vacía.');
    rl.question('Ingrese una cadena de texto: ', (cadena) => {});
  }

  const resultado = contarVocalesYNumeros(cadena);
  console.log(`La cadena contiene ${resultado.vocales} vocales y ${resultado.numeros} números.`);
  rl.close();
});