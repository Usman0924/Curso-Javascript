//destructuring en arreglos
const numeros = [10,20,30,40,50];

//Se pueden nombrar comom uno quiera, sin embargo a diferencia de los objetos en el cual solo podemos sacar el valor que requiramos, pero aqui se debe de colocar comas en dado caso de que no se requieran esos valores previos
const [primero, segundo, ...tercero] = numeros;


console.log(primero);
console.log(segundo);
console.log(tercero);