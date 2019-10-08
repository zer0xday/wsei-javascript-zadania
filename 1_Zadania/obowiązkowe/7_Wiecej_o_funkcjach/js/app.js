/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// TODO
// deklaracja funkcji o nazwie jeden
function jeden() {

    // deklaracja pierwszej zmiennej
    var zmienna1 = 1;

    // deklaracja drugiej fukcji
    function dwa() {

        // wywolanie zmiennej z funkcji jeden
        // mamy do niej dostęp, gdyż funkcja o nazwie dwa
        // została zadeklarowana w środku funkcji o nazwie jeden
        console.log(zmienna1);

        // deklaracja drugiej zmiennej
        var zmienna2 = 3;
    }

    // wyowalanie funkcji o nazwie dwa
    dwa();

    // brak dostępu do zmiennej, gdyż została ona zadeklarowana
    // w funkcji o nazwie dwa, dlatego też funkcja o nazwie jeden
    // nie "widzi" tej zmiennej - została ona zadeklarowana w innym scopie
    console.log(zmienna2)
}

// wywolanie funkcji o nazwie jeden
jeden()