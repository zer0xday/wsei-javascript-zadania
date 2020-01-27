//sygnatura funkcji 'jeden', rozpoczecie definiowania
function jeden() {

    //definicja zmiennej 'zmienna1' i przypisanie wartości int '1'
    var zmienna1 = 1;

    //sygnatura funkcji 'dwa', rozpoczecie definiowania
    function dwa() {

        //wypisanie w konsoli wartości zmiennej 'zmienna1'
        console.log(zmienna1);

        //definicja zmiennej 'zmienna2' i przypisanie wartości int '3'
        var zmienna2 = 3;
    }

    //wywołanie funkcji 'dwa' która wyświetli w konsoli '1'
    dwa();

    //próba wyświetlenia w konsoli wartości zmiennej 'zmienna2' która jednak nie istnieje w tym scope'ie, rzuci ReferenceError
    console.log(zmienna2)
}

//wywołanie funkcji 'jeden' ktora wyświetli w konsoli '1' i rzuci ReferenceError
jeden()