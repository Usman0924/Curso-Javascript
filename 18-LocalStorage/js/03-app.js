//Eliminar y actualizar en local storage
localStorage.removeItem('nombre'); //eliminar

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Nuevo Mes');
localStorage.setItem('meses',mesesArray);