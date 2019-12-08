
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */
// TODO
//deklaracja funkcji o nazwie sortArray
function sortArray() {

    //deklaracja tablicy o nazwie points
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wywołanie funkcji sortującej na tablicy 'points'
    //funkcja sortuje elementy rosnąco
    points.sort(function (a, b) {
        //odejmowanie bieżącego elementu tablicy od kolejnego
        return a - b;
    });

    //zwrocenie tablicy
    return points;
}

//wywolanie funkcji sortArray
sortArray();
