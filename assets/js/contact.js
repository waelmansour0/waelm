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


function sendEmail() {
    Email.send({
        Host : "smtp.googlemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}