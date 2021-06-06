const input = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");

input.forEach(Layer => {
    Layer.onchange = function () {
        if (Layer.value != '') {
            Layer.style.backgroundColor = '#56537ec4';
        }
        else {
            Layer.style.backgroundColor = '#56537e2e';
        }
    }
});

textarea.onchange = function () {
    if (textarea.value != '') {
        textarea.style.backgroundColor = '#56537ec4';
    }
    else {
        textarea.style.backgroundColor = '#56537e2e';
    }
};