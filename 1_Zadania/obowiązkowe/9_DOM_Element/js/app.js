document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // zad 0
    function getDatasInfo(elements) {
        const newArray = [];

        for (let link of elements) {
            newArray.push(link.getAttribute('data-color'));
        }

        return newArray;
    };

    const linksAttributes = getDatasInfo(links);
    // console.log(linksAttributes);

    // zad 1
    // console.log(homeElement, childElements, banner, blocks, links);

    function outputCollections(collection) {
        for (let item of collection) {
            // console.log(
            //     `tag: ${item.tagName}`, 
            //     `class: ${item.className ? item.className : 'none'}`
            // );
        }
    };

    // outputCollections(childElements);
    // outputCollections(blocks);
    // outputCollections(links);

    // zad 2
    // innerHTML bierze pod uwagę tylko dzieci diva o klasie 'block'
    // natomiast outerHTML zwraca dzieci wraz z elementem parent o klasie 'block'
    for (let item of blocks) {
        // console.log(
        //     `innerHTML: ${item.innerHTML}`, 
        //     `outerHTML: ${item.outerHTML}`
        // );

        item.innerHTML = "Nowa wartość diva o klasie blocks";
        // console.log(item.innerHTML);
        // elementy wewnatrz diva .block zostały zamienione na ustawioną przez nas powyżej wartość
        // zamiast podwójnych znaczników <a> zadeklarowanych uprzednio w HTML
        // uzyskamy w divie napis zadeklarowany w item.innerHTML
    };

    // zad 3
    const mainFooter = document.querySelector('#mainFooter');
    // console.log(mainFooter);
    function getId(element) {
        return element.id;
    };

    const mainFooterId = getId(mainFooter);
    // console.log(mainFooterId);

    // zad 4
    function getTags(elements) {
        const newArray = [];
        
        for (let element of elements) {
            newArray.push(element.tagName);
        }

        return newArray;
    };

    const elementsTags = getTags(childElements);
    // console.log(elementsTags);

    // zad 5
    function getClassInfo(element) {
        const newArray = [];

        for (els of element.childNodes) {
            if (els.className !== undefined && els.className !== '') {
                newArray.push(els.className);
            }
        };

        return newArray;
    };

    const elementsClassNames = getClassInfo(banner);
    console.log(elementsClassNames);

    // zad 6
    const listElements = document.querySelectorAll('nav > ul > li');
    console.log(listElements);

    function setDataDirection(elements) {
        for (let element of elements) {
            if (!element.hasAttribute('data-direction')) {
                element.setAttribute('data-direction', 'top');
            }
        }
    };

    setDataDirection(listElements);
});
