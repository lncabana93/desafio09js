import './style.css';

console.warn('Ejercicio 1');
//                       0        1        2             3        4
const arrayFrutas = ['manzana', 'pera', 'mandarina', 'zandia', 'naranjas'];
console.log(arrayFrutas);
let frutasEliminadas = arrayFrutas.pop();
console.log(arrayFrutas);
let nuevasFrutas = arrayFrutas.push('mango');
console.log(arrayFrutas);

console.warn('Ejercicio 2');
//                       0         1          2
const arrayTareas = ['limpiar', 'estudiar', 'entrenar'];
console.log(arrayTareas);
let tareasCompletadas = arrayTareas.shift();
console.log('Tarea completada:', tareasCompletadas);
let nuevaTarea = arrayTareas.unshift('trabajar');
console.log(arrayTareas);

console.warn('Ejercicio 3');
//                            0                1                 2             3              4
const arrayClientes = [
  'Pedro Guerrero',
  'Magda Martinez',
  'Luciano Cabaña',
  'Juan Perez',
  'Franco Sekulin',
];
console.log(arrayClientes);
let nuevosClientes = arrayClientes.push('Pepe Rios', 'Julian Centurion');
console.log(arrayClientes);
let atendidosClientes = arrayClientes.shift();
console.log('Su turno Sr.', atendidosClientes);

console.warn('Ejercicio 4');
//                     0  1  2  3  4
const arrayNumeros = [32, 44, 55, 18, 22];
console.log(arrayNumeros);
let numeroEliminado = arrayNumeros.pop();
let numeroAgregado = arrayNumeros.unshift(22);
numeroEliminado = arrayNumeros.pop();
numeroAgregado = arrayNumeros.unshift(18);
numeroEliminado = arrayNumeros.pop();
numeroAgregado = arrayNumeros.unshift(55);
console.log(arrayNumeros);

console.warn('Ejercicio 5');
let carritoCompras = []
carritoCompras.push(prompt('ingrese su primer articulo')) 
carritoCompras.push(prompt('ingrese el segundo articulo')) 
carritoCompras.push(prompt('ingrese el tercer articulo'))  
console.log (carritoCompras)
carritoCompras.pop(prompt('desea eliminar el este ultimo articulo ?'))
console.log(carritoCompras)
 
console.warn('Ejercicio 6');
const arrayValores = [5, 10, 15, 20, 25, 30];
console.log(arrayValores);
let valoresDoblados = arrayValores.map((numero) => numero * 2);
console.log(valoresDoblados);

console.warn('Ejercicio 7');
const arrayNombres = ['luciano', 'magda', 'miguel', 'damian'];
console.log(arrayNombres);
const nomMayus = arrayNombres.map((ObjNombres) => {
  return ObjNombres.toUpperCase();
});
console.log(nomMayus);

console.warn('Ejercicio 8');
const arrayPrecios = [140, 590, 780, 1580];
console.log(arrayPrecios);
const preciosConIva = arrayPrecios.map((objPrecios) => {
  return (objPrecios * 21) / 100 + objPrecios;
});
console.log(preciosConIva);

console.warn('Ejercicio 9');
const arrayNumero1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayNumero1);
const arrayCuadrados = arrayNumero1.map((objNumero1) => {
  return objNumero1 * objNumero1;
});
console.log(arrayCuadrados);

console.warn('Ejercicio 10');
const numero = [20, 35, 50, 55, 60, 80, 95, 10, 6, 4, 33];
console.log(numero);
const arrayPares = numero.filter(function (num) {
  return num % 2 === 0;
});
console.log(arrayPares);

console.warn('Ejercicio 11');
const palabras = [
  'telecomunicaciones',
  'ferrocarril',
  'auto',
  'moto',
  'ipoalergenico',
  'celular',
  'reloj',
];
console.log(palabras);
const palabrasLargas = palabras.filter(function (palabras) {
  return palabras.length > 5;
});
console.log(palabrasLargas);

console.warn('Ejercicio 12');
const productos = [
  { Articulo: 'Manzana', Precio: 200 },
  { Articulo: 'Pasta de dientes', Precio: 1500 },
  { Articulo: 'Coca Cola', Precio: 450 },
  { Articulo: 'Papel Higienico', Precio: 800 },
  { Articulo: 'Tomates', Precio: 350 },
  { Articulo: 'Bananas', Precio: 500 },
];
console.log(productos);
const productosEnOferta = productos.filter(
  (producto) => producto.Precio <= 500,
);
console.log(productosEnOferta);

console.warn('Ejercicio 13');
const estudiantes = [
  { nombre: 'Juan', apellido: 'Benitez', nota: 7 },
  { nombre: 'Pablo', apellido: 'Ojeda', nota: 5 },
  { nombre: 'Juanita', apellido: 'Viale', nota: 9 },
  { nombre: 'Lola', apellido: 'Palooza', nota: 4 },
  { nombre: 'Florencia', apellido: 'Perez', nota: 8 },
];
console.log(estudiantes);
const estudiantesAprobados = estudiantes.filter(
  (estudiantes) => estudiantes.nota >= 7,
);
console.log(estudiantesAprobados);

console.warn('Ejercicio 14');
const tareas = [
  { objeto: 'supermercado', descripcion: 'comprar verduras', completada: true },
  { objeto: 'bañar', descripcion: 'bañar a los perros', completada: false },
  { objeto: 'auto', descripcion: 'lavar el auto', completada: true },
  {
    objeto: 'tabajo',
    descripcion: 'cumplir con la jodrnada laboral',
    completada: true,
  },
  {
    objeto: 'cesped',
    descripcion: 'cortar el cesped en el hogar',
    completada: false,
  },
  {
    objeto: 'estudio',
    descripcion: 'completar el desafio de js',
    completada: true,
  },
  {
    objeto: 'pared',
    descripcion: 'pintar las paredes de las piesas',
    completada: false,
  },
  {
    objeto: 'deportes',
    descripcion: 'completar 1 hora por dia',
    completada: false,
  },
  {
    objeto: 'emprendimiento',
    descripcion: 'sacar precios de los productos a vender',
    completada: true,
  },
];
console.log(tareas);
const tareaRealizada = tareas.filter((tareas) => tareas.completada === true);
console.log(tareaRealizada);

console.warn('Ejercicio 15');
let arrayNombres1 = ['luciano', 'magda', 'miguel', 'damian'];
arrayNombres1.forEach((arrayNombres1) => {
  console.log(arrayNombres1);
});

console.warn('Ejercicio 16');
let edades = [18, 22, 30, 25, 40, 50];
let sumaEdades = 0;
edades.forEach((edades) => {
  sumaEdades = edades + edades;
  console.log(`${edades} + ${edades} = ${sumaEdades}`);
});

console.warn('Ejercicio 17');
let productos1 = [
  { Articulo: 'Manzana', Precio: 200 },
  { Articulo: 'Pasta de dientes', Precio: 1500 },
  { Articulo: 'Coca Cola', Precio: 450 },
  { Articulo: 'Papel Higienico', Precio: 800 },
  { Articulo: 'Tomates', Precio: 350 },
  { Articulo: 'Bananas', Precio: 500 },
];
let descuentos = 0;
productos1.forEach((productos1) => {
  descuentos = productos1.Precio - (productos1.Precio * 10) / 100;
  console.log(`${productos1.Articulo}  ${descuentos}`);
});

console.warn('Ejercicio 18')
let listaInvitados = ['pepito','fulanito','sultanito','menganito','miguelito']
listaInvitados.forEach(listaInvitados =>{
  const invitaMayus = listaInvitados.toUpperCase()
 /*  console.log(`invitacion enviada a: ${listaInvitados}`) */
  console.log(`invitacion enviada a: ${invitaMayus}`)
})
