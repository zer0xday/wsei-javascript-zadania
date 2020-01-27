document.addEventListener("DOMContentLoaded", function () {
  var a = document.getElementById("a");
  var b = document.getElementById("b");

  // Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
  // addEventListener to właśnie document)
  console.log("obiekt document: ", this);

  a.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id a
    console.log("a: ", this);
  });

  b.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id b
    console.log("b: ", this);


    function innerFuncOne(/* **ODPOWIEDŹ: tu sobie odbiorę element** */) {
      // Tutaj this wskazuje na element Window, bo funkcja została
      //wywołana bez żadnego kontekstu.
      console.log("innerFuncOne: ", this);

      /* **ODPOWIEDŹ: tu sobie zmienię kolor na elementcie z argumentu** */
    }

    /* **ODPOWIEDŹ: przekażę this w argumencie** */
    innerFuncOne();
  });
});
