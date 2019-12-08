// po przeniesieniu skryptu do sekcji head otrzymujemy błąd,
// gdyż wywowałiliśmy skrypt przed załadowaniem elementów DOM,
// co poskutkowało tym, że JS nie znalazł elementów w strukturze HTML
document.addEventListener('DOMContentLoaded', () => {
	var menu = document.querySelector("#menu");
	var paragraf = document.querySelector("p");

	menu.classList.add("menu");
	paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

// przeniesienie skryptu na sam koniec skutkuje tym, że odpala się on
// po załadowaniu struktury HTML, a korzystając z listenera DOMContentLoaded
// czekamy aż struktura ta załaduje się w pełni i wtedy wykonujemy instrukcje