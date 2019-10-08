document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    // zad 0
    const title = document.querySelector('.title');
    // console.log(title);

    function getDataAnimation(element) {
        let dataAnimation = element.getAttribute('data-animation');
        return dataAnimation;
    };

    const dataAnimation = getDataAnimation(title);
    // console.log(dataAnimation);

    // zad 1
    const home = document.querySelector('#home');
    // console.log(home);

    const firstLi = document.querySelector('ul > li[data-direction]:first-child');
    // console.log(firstLi);

    const block = document.querySelector('.block:first-child');
    // console.log(block);

    //zad 2
    const navLis = document.querySelectorAll('nav > ul > li');
    // console.log(navLis, '7 elementow');

    const paragraphs = document.querySelectorAll('div > p');
    // console.log(paragraphs, '8 elementow');

    const divs = document.querySelectorAll('article div');
    // console.log(divs, '14 elementow');

    // zad 3
    const firstArticle = document.querySelector('article.first');
    const articleHeaders = firstArticle.querySelectorAll('h1');
    /* 0 elementów h1, chodziło o h2? */
    // const articleHeaders2 = firstArticle.querySelectorAll('h2');
    console.log(articleHeaders);
});
