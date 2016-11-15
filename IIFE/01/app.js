/*
  IIFE: Immediately Invoked Function Expression
  viene a ser una funcion que se ejecuta inmediatamente después de ser creada:
  
    ( function() {
      //se ejecutará tras la creación.
    } () )
  
  También se llama envoltura o closure.
  Usar el patrón IIFE ayuda a no poblar el global namespace de variables. Además facilita a emular 
  el comportamiento de  propiedades "privadas", cosa que existe en lenguajes como JAVA pero no en JS.
  En Lista, 'palabras', 'indice' y 'cantidad' son propiedades privadas.

  más info:
    - http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
    - http://www.desarrolloweb.com/articulos/iife-closures-envolutra-funcion-javascript.html
  
    */
    ;(function() {
      'use strict';

  // Clase que maneja listas de palabras
  var Lista = function(arreglo) {
    // Parte privada
    var vector = arreglo,
    indice = 0,
    cantidad = vector.length;

    return {
      // Dentro de este objeto ponemos la funcionalidad pública: accesible incluso desde línea 55
      getNext: function() {
        var p;  
        try {
          p = (vector[indice] !== undefined) ? vector[indice] : "ERROR CON LOS DATOS";
          console.log(p);
        }
        catch(error) {
          console.log(error);
        }
        finally {
          indice++;
          if(indice >= cantidad) {
            indice = 0;
          }
        }
        return(p);
      },
      reset: function() {
        // Reiniciamos el índice
        indice = 0;
      },
    };
  };

window.onload = function() {
  // Creamos una instancia de Lista:
  var palabras = new Lista(["volar", "nadar", "jugar ping pong", "jugar pc", "flipar"]),
  destino = document.querySelector('.gustos'),
  exec = document.querySelector('#exec'),
  test = document.querySelector('#test');
  console.log(palabras);

  // Seleccionamos el span donde irá la palabra y la obtenemos:
  destino.innerHTML = palabras.getNext();

  // Añadimos un listener que llamará a la siguiente palabra con cada click
  exec.addEventListener("click", function(){
    destino.innerHTML = palabras.getNext();
  });

  // Por último, comprobamos que las propiedades son realmente privadas, tratando de acceder directamente a una:
  test.addEventListener("click", function() {
    alert("La propiedad indice es privada: " + palabras.indice);
  });
};

}());