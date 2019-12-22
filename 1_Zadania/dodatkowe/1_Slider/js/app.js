document.addEventListener('DOMContentLoaded', () => {
    // 2
    console.log('It works!');

    const nextBtn = document.querySelector("button#nextPicture");
    const prevBtn = document.querySelector("button#prevPicture");
    const liElements = document.querySelectorAll("ul > li");
    let index = 0;

    // console.log(nextBtn, prevBtn, liElements, index);
    
    // 3
    liElements[index].classList.add('visible');
    
    // 4
    nextBtn.addEventListener('click', () => {
        console.log("Show next image");

        // 5
        liElements[index].classList.remove('visible');
        index++;
        
        if (index > liElements.length - 1) {
            index = 0;
        }

console.log(index);

        liElements[index].classList.add('visible');
    });

    prevBtn.addEventListener('click', () => {
        console.log("Show prev image");
        // 6
        liElements[index].classList.remove('visible');
        index--;
        
        if (index < 0) {
            index = liElements.length - 1;
        }

        console.log(index);
        
        liElements[index].classList.add('visible');
    });
    
    // 7
    // Slider wywala się, gdy zmienna index przekroczy ilość 
    // możliwych indeksów tablicy
});