// funkcja się wykona
sayHi();

function sayHi() {
    console.log('Cześć');
}

// funkcja się wykona
sayHi();

// funkcja się nie wykona
sayWelcome();

let sayWelcome = function() {
    console.log('Witaj');
};

// funkcja się nie wykona bo wykonywanie kodu zostanie przerwane wcześniej
sayWelcome();

// funkcje definiowane klasycznie mają dostępne z dowolnego miejsca w scopie (zarówno przed i po deklaracji funkcji)
// dostępność funkcji przypisanych do zmiennych ograniczona jest miejscem ich przypisania (zarówno w przypadku leta jak i vara)
// czyli takie wyrażenia funkcyjne dostępne są do użycia dopiero po ich zdefiniowaniu.