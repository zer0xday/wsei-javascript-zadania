document.addEventListener('DOMContentLoaded', () => {
    function getClosestList(fromButton) {
        return fromButton.closest(`ul`);
    }

    function getList(id) {
        return document.querySelector(id);
    }

    function move(element, destination) {
        element.remove();

        destination.appendChild(element);
    }

    function getSingleElement(fromButton) {
        return fromButton.closest('li');
    }

    const moveButtons = document.querySelectorAll('.moveBtn');

    // fixme
    moveButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            let actualList = getClosestList(btn);
            let actualElement = getSingleElement(btn);
            let destinationList = null;

            console.log(actualList.id);

            switch(actualList.id) {
                case 'list1':
                    destinationList = getList('list2');
                    break;

                case 'list2':
                    destinationList = getList('list1');
                    break;

                default: return false;
            }

            move(actualElement, destinationList);

            return true;
        });
    });
});