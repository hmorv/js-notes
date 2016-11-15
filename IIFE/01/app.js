/*
  IIFE: Immediately Invoked Function Expression
  viene a ser una funcion que se ejecuta inmediatamente después de ser creada:
  
    ( function() {
      //se ejecutará tras la creación.
    } () )
  
  También se llama envoltura o closure.
  Usar el patrón IIFE ayuda a no poblar el global namespace de variables. Además facilita a emular 
  el comportamiento de  propiedades "privadas", cosa que existe en lenguajes como JAVA pero no en JS.
  En Lista, 'palabras', 'index' y 'cantidad' son propiedades privadas.

  más info:
    - http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
    - http://www.desarrolloweb.com/articulos/iife-closures-envolutra-funcion-javascript.html
  
    */
    ;(function() {
      'use strict';

  // Class that handles words lists
  var List = function(arreglo) {
    // Private part
    var vector = arreglo,
    index = 0,
    cantidad = vector.length;

    return {
      // We write public code inside this object
      getNext: function() {
        var p;  
        try {
          p = (vector[index] !== undefined) ? vector[index] : "ERROR CON LOS DATOS";
          console.log(p);
        }
        catch(error) {
          console.log(error);
        }
        finally {
          index++;
          if(index >= cantidad) {
            index = 0;
          }
        }
        return(p);
      },
      reset: function() {
        // reset the index
        index = 0;
      },
    };
  };

window.onload = function() {
  // Let's create List instance:
  var words = new List(["fly", "swim", "play ping pong", "play computer", "freak out"]),
  output = document.querySelector('.gustos'),
  exec = document.querySelector('#exec'),
  test = document.querySelector('#test');
  console.log(words);

  // Select span where we show word and we get it:
  output.innerHTML = words.getNext();

  // add a listener who will call next word
  exec.addEventListener("click", function(){
    output.innerHTML = words.getNext();
  });

  // Check properties are really private, so let's try to access index.:
  test.addEventListener("click", function() {
    alert("Index property is private: " + words.index);
  });
};

}());