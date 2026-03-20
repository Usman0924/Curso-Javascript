// Variables
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const year = document.querySelector('#year');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;


// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo:'',
    maximo: '',
    puertas: '',
    transmision: '',
    color:''
}

// Eventos
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos); 

    // Llena las opciones de años
    llenarSelect();
})

// Event listener para los select de busqueda
marca.addEventListener('change', e=>{
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', e=>{
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
});

minimo.addEventListener('change', e=>{
    datosBusqueda.minimo = parseInt(e.target.value);

    filtrarAuto();
});

maximo.addEventListener('change', e=>{
    datosBusqueda.maximo = parseInt(e.target.value);

    filtrarAuto();
});

puertas.addEventListener('change', e=>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', e=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', e=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

// Funciones
function mostrarAutos(autos){
    limpiarHTML(); //Elimina el html previo
    autos.forEach(auto =>{
        const {marca,modelo, year, precio, puertas,color, transmision} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} PUERTAS: - TRANSMISIÓN: ${transmision} - PRECIO: ${precio}  - COLOR: ${color}
        `;

        // Insertar en el html
        resultado.appendChild(autoHTML);
    });
}

function limpiarHTML(){
    //Mientras haya algo en resultado
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect(){
    for(let i = max; i >= min; i--){
        const option = document.createElement('OPTION');
        option.value = i;
        option.text = i;

        year.appendChild(option);
    }
}

// Funcion que filtra en base a la busqueda
function filtrarAuto(){
    //Se utilizan funciones de alto nivel
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtarMinimo).filter(filtarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if(resultado.length){
        mostrarAutos(resultado);
        return;
    }

    noResultado();
   
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }else{
        return auto;
    }
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === year;
    }else{
        return auto;
    }
}

function filtarMinimo(auto){
    const {minimo} =  datosBusqueda;
    if(minimo){
        return auto.precio >= minimo;
    }else{
        return auto;
    }
}

function filtarMaximo(auto){
    const {maximo} =  datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    }else{
        return auto;
    }
}

function filtrarPuertas(auto){
    const {puertas} =  datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }else{
        return auto;
    }
}

function filtrarTransmision(auto){
    const {transmision} =  datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }else{
        return auto;
    }
}

function filtrarColor(auto){
    const {color} =  datosBusqueda;
    if(color){
        return auto.color === color;
    }else{
        return auto;
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'NO HAY RESULTADOS, INTENTA CON OTROS METODOS DE BUSQUEDA';
    resultado.appendChild(noResultado);
}