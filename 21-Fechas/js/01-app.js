const diaHoy = new Date();

let valor;

valor = diaHoy;
valor = diaHoy.getFullYear(); //año actual
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.setFullYear(2026);

// console.log(typeof valor);
console.log(valor);