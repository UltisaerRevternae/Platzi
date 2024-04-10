// Capacidades que tienen las funciones al igual que otros metodos

// Pasar funciones como argumentos -> callback
function a(){}
function b(a){}
b(a)

// Retornar funciones
function a(){ // Declaracion de funcion
  function b(){}
  return b
}

// Asignar funciones a variables -> Expresion de funcion
const a = function() {}

// Tener propiedades y metodos
function a(){}
const obj={}
a.call(obj) // Contexto de ejecucion

// Anidar funciones -> Nested functions
function a(){
  function b(){
    function c(){

    }
    c()
  }
  b()
}
a()

// Funciones en objetos
const rocket = {
  name:'Falcon 9',
  launchMessage:function launchMessage (data) {
    console.log(data)}
  }
rocket.launchMessage('🔶')