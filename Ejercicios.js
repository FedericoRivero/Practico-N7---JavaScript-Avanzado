console.log("Ejercicio 1");
function Queue() {
  // Implementa la clase Queue
  // enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
  // dequeue:   Remueve un valor de la queue.
  // Obedece a FIFO y respeta el underflow (cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
  // size:   Devuelve el número de elementos que contiene la queue.
  this.array = [];
  $ = Queue.prototype;

  $.enqueue = (elemento) => {
    return this.array.push(elemento);
  };
  $.dequeue = () => {
    return this.array.shift();
  };
  $.size = () => {
    return this.array.length;
  };
}
const queue = new Queue();

console.log(queue);
console.log(queue.size());

queue.enqueue(48);
queue.enqueue(14);
queue.enqueue(47);

console.log(queue);
console.log(queue.size());

queue.enqueue(22);
queue.enqueue(34);

console.log(queue);
console.log(queue.size());

queue.dequeue();

console.log(queue);
console.log(queue.size());


console.log("Ejercicio 2");
function cardGame() {
  // Implementar la función cardGame: a partir de dos Queue que va a recibir como paráemtros tiene
  // que determinar quién será el ganador del juego de cartas. Las reglas de dicho juego son las siguientes:
  //    - Cada jugador tendrá un mazo con cartas numeradas del 1 al 12
  //    - Estos mazos estarán implementados a partir de la estructura de Queue.
  //    - En cada turno del juego, cada jugador lanzará la carta que se encuentre primero en su mazo (Queue)
  //    - El jugador que tenga el número más alto en el turno ganará dicho turno
  //    - El jugador que gane dicho turno se quedará con ambas cartas agregándolas al final del mazo (Primero
  //    la suya y luego la de su contrincante)
  //    - En el caso de que haya empate ambos pierden las cartas y no se agregan a ningún mazo
  //    - El ganador del juego será quien deje a su oponente sin cartas en su mazo
  // Aclaración: la función cardGame debe retornar "A wins!" en el caso de que el ganador sea el jugador A o
  // "B wins!" en caso contrario. [Puede ocurrir que haya empate, en dicho caso retornat "Game tie!"]
  // Ejemplo:
  //    - mazoUserA = [4,2,10,11]
  //    - mazoUserB = [6,9,10,3]
  //    Primer mano:
  //     A --> 4  vs  6 <-- B [6 > 4 entones gana la mano B y pone ambas cartas en su mazo, colocando primero la suya]
  //    - mazoUserA = [2,10,11]
  //    - mazoUserB = [6,9,10,3,6,4]

 
}



console.log("Ejercicio 3");
function sets(array1, array2) {
  // Implementa el metodo sets
  // Usar el objeto set para obtener la cantidad de elementos iguales en dos arreglos
  // Muestra la cantidad
  // Aqui tu codigo
  let set1 = new Set(array1);
  let set2 = new Set(array2);
  let count = 0;

  !Array.isArray(array1) || !Array.isArray(array2)
    ? console.log("No es un arreglo")
    : set1.forEach((elemento) => {
        set2.has(elemento) ? count++ : null;
        return count;
      });
  console.log(count + " elementos iguales");
}

sets(
  [100, 20, 43, 84, 57, 16, 87, 84, 49, 104],
  [147, 51, 53, 20, 75, 87, 104, 97, 48, 19]
);
sets([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
sets("hola", "aloh");
sets("hola", "fede");
