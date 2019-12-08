// 1
const firstChild = document.querySelector('.first').firstElementChild;
const thirdChild = firstChild.children[2];

console.log(thirdChild);

// 2
const secondParent = document.querySelector('#second').parentElement;
const second4thChild = secondParent.querySelector(':nth-child(4)');

console.log(second4thChild);

// 3
const dataEx = document.querySelector('*[data-ex="third"]');
const dataExGrandparent = dataEx.closest(':nth-child(1)');
const dataExLastChild = dataExGrandparent.lastElementChild;
const dataExFirstChild = dataExLastChild.firstElementChild;

const dataExMiddleChild = () => {
    let index = Math.floor(dataExFirstChild.children.length / 2);

    return dataExFirstChild.children[index];
}

console.log(dataExMiddleChild());

// 4
const forthParent = document.querySelector('.forth').parentElement;
const forthFirstParentChild = forthParent.querySelector('article');
const forthSecondChild = forthFirstParentChild.querySelectorAll('p')[1];

console.log(forthSecondChild);