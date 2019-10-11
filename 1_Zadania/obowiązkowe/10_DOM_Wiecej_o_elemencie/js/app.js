document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // zad 0
    const listEx5 = document.querySelector('.ex5 > ul');
    const evenGreenItems = listEx5.querySelectorAll('li:nth-child(even)');
    const fifthElement = listEx5.querySelector('li:nth-child(5)');
    const everyThirdItem = listEx5.querySelectorAll('li:nth-child(3n+3)');

    for (let item of evenGreenItems) {
        item.style.background = 'rgb(0, 255, 0)';
    };

    fifthElement.classList.add('big');

    for (let item of everyThirdItem) {
        item.style.textDecoration = 'underline';
    };

    // zad 1
    const ex1 = document.querySelector('.exercise.ex1');
    const chromeEx1 = ex1.querySelector('div');
    const edgeEx1 = ex1.querySelector('div:nth-child(3)');
    const firefoxEx1 = ex1.querySelector('div:last-child');

    chromeEx1.querySelector('.chrome').style.width = '100px';
    chromeEx1.querySelector('a').innerHTML = 'Chrome';

    edgeEx1.querySelector('.edge').style.backgroundImage = 'url("assets/img/edge.png")';
    edgeEx1.querySelector('a').href = 'https://www.microsoft.com/pl-pl/windows/microsoft-edge';

    firefoxEx1.querySelector('.firefox').style.backgroundImage = 'url("assets/img/firefox.png")';
    firefoxEx1.querySelector('a').href = 'https://www.mozilla.org/pl/firefox/download/thanks/';
    firefoxEx1.querySelector('a').innerHTML = 'Firefox';


    // zad 2
    const ex2 = document.querySelector('.exercise.ex2');
    const name = ex2.querySelector('#name');
    const favColor = ex2.querySelector('#fav_color');
    const favMeal = ex2.querySelector('#fav_meal');

    name.innerHTML = 'Paweł Majcherczyk';
    favColor.innerHTML = 'Biały';
    favMeal.innerHTML = 'Tortilla';

    // zad 3
    const ex3 = document.querySelector('.exercise.ex3');
    const ulEx3 = ex3.querySelector('ul');
    const liEx3 = ulEx3.querySelectorAll('li');
    
    ulEx3.classList.add('menu');
        
    for (let li of liEx3) {
        li.classList.add('menuElement');
        li.classList.remove('error');
    }

    // zad 4
    const ex4 = document.querySelector('.exercise.ex4');
    const ulEx4 = ex4.querySelectorAll('ul > li');
    let counter = 1;

    for (li of ulEx4) {
        li.setAttribute('data-id', counter++);
    }
});