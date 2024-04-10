// Dato primitivo paso por valor

let x = 1;
let y = "Hola";
let z = null;
let a = x;
let b = y;
let c = z;
console.log(x, y, z, a, b, c);
a = 12;
b = "Platzi";
c = undefined;

// Dato complejo mutable y por referencia

let frutasArray = ["manzana"];
frutasArray.push("pera");
console.log(frutasArray);
let panes = ["🥖"];
let copiaDePanes = panes;
copiaDePanes.push("🥯");
console.log(panes, copiaDePanes);