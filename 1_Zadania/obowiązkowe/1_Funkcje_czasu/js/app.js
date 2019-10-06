function countHello(param) {
    var counter = 1;
    var interval = setInterval(() => {
        console.log('Hello ', counter++);

        if (counter > param) clearInterval(interval);
    }, 500);
};

countHello(4);