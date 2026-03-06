const producto = 'Monitor de 20 pulgadas';

//reemplazar un texto
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'));

//extraer parte de una cadena
console.log(producto.slice(0,10));
//Si no le pasas segundo valor, recorta desde el inicio hasta el final
console.log(producto.slice(8));
//Si el primer numero es mayor al segundo no hace nada
console.log(producto.slice(2,1));


//substring - alternativa a slice
console.log(producto.substring(0,10));
//substring es mas inteligente asi que si detecta que el primer numero es mayor que el segundo los cambia
console.log(producto.substring(2,1));

const usuario = 'Sergio';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0,1));