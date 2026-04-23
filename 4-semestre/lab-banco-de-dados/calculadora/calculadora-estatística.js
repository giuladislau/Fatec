const numeros = [1, 2, 3, 3, 2, 6, 77, 8, 9, 12, 74, 77, 77];

const ordenados = [...numeros].sort((a, b) => a - b);

const media = numeros.reduce((acc, val) => acc + val, 0) / numeros.length;

let mediana;
const n = ordenados.length;

if (n % 2 === 0) {
    mediana = (ordenados[n/2 - 1] + ordenados[n/2]) / 2;
} else {
    mediana = ordenados[Math.floor(n/2)];
}

const frequencia = {};
let moda = ordenados[0];
let max = 0;

for (let num of ordenados) {
    frequencia[num] = (frequencia[num] || 0) + 1;

    if (frequencia[num] > max) {
        max = frequencia[num];
        moda = num;
    }
}

console.log("Numeros:", numeros);
console.log("Media:", media.toFixed(2));
console.log("Mediana:", mediana.toFixed(2));
console.log("Moda:", moda);