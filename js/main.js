let textResult = document.getElementById("textChat");

function teg(tegStyle) {
    textResult.value =
    textResult.value + tegStyle;
}

function clean() {
    textResult.value = "";
}

function back() {
    textResult.value = textResult.value.substring(0, textResult.value.length - 1);
}

function equal() {
    textResult.value = eval(textResult.value);
}

document.addEventListener('keydown', (e) => {
    if (e.key == "c" || e.key == "C") {
        clean();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key == "=" || e.key == "Enter") {
        equal()
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key == "Backspace") {
        back()
    }
});

function noSrtring(event) {
    let char = String.fromCharCode(event.which);

    if(!(/[0-9, + / * -]/.test(char))){
        event.preventDefault();
    }
}