/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//sygnatura funkcji sortArray, rozpoczecie definiowania
function sortArray() {

    //utworzenie zmiennej points i przypisanie do niej tablicy liczb
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wykonanie na obiekcie tablicy metody 'sort' i przekazanie do niej callbacka definiującego metodę sortowania
    points.sort(function (a, b) {
        //jeśli po odjęciu b od a wynik będzie ujemny, element a będzie uznany za mniejszy (zostanie przesunięty ku początkowi)
        // -               ||                - równy 0, elementy zostana uznane za równe (zostaną na swoich pozycjach)
        // -               ||                - dodatni, element a będzie uznany za większy (zostanie przesunięty ku końcowi)
        return a - b;
    });

    //zwracamy posortowaną tablicę od najmniejszej do największej wartości
    return points;
}

//wywołujemy funkcję 'sortArray', jednak nic nie robimy ze zwracaną wartością
sortArray();