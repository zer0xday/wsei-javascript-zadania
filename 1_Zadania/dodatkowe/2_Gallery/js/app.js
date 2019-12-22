/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('It Works!');

    // 2 
    const liElements = document.querySelectorAll("ul > li");
    const body = document.body;

    // console.log(liElements, body);

    // 3
    liElements.forEach((item) => {
        const img = item.querySelector('img');
        let fullScreenElement = null;
        let closeButton = null;

        img.addEventListener('click', function() {
            // 3
            console.log('it works');
            // 4
            console.log(img.src);
            // 6
            createFullScreenElement(img.src);

            fullScreenElement = document.querySelector('.fullScreen');
            closeButton = document.querySelector('button.close');
        });
    });

    // 5
    function createFullScreenElement(src) {
        const htmlStruct = `<div class="fullScreen">
            <img src="${src}">
            <button class="close">Close</button>
        </div>`;

        body.innerHTML += htmlStruct;
    }

    function removeFullScreenElement() {
        // todo
    }
});