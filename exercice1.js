const arr = [2, 5, 8, 12, 16, 24, 38, 23, 72, 91];
let llave = 23;

let inicio = 0;
let fin = arr.length - 1;
let encontrado = false;

while (inicio <= fin && !encontrado) {
  const indiceMedio = Math.floor((inicio + fin) / 2);
  const valorMedio = arr[indiceMedio];

  if (llave === valorMedio) {
    console.log(`La llave se encontró en el índice ${indiceMedio}.`);
    encontrado = true;
  } else if (llave > valorMedio) {
    inicio = indiceMedio + 1;
  } else {
    fin = indiceMedio - 1;
  }
}

if (!encontrado) {
  console.log("La llave no se encontró en el arr.");
}