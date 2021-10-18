function validateForm(theForm) {
    var reason = "";
    reason += validateName(theForm.fullname.value);
    reason += validatePhone(theForm.phone.value);
    reason += validateEmail(theForm.email.value);
    reason += validateMessage(theForm.message.value);

    if (reason != "") {
        alert("Some fields need correction:\n" + reason);
    } else {
        sendMail(theForm.fullname.value, theForm.phone.value, theForm.email.value, theForm.message.value);
    }
    return false;
}

function validateName(x) {
    console.log(x)
    if (x.length < 2) {
        return "Please type your name\n"
    }
    return ""
}
function validatePhone(x) {
    if (x.length < 8) {
        return "Please type your phone number\n"
    }
    return ""
}
function validateEmail(x) {
    if (x.length < 6 && x.length != 0) {
        return "Please provide your email\n"
    }
    return ""
}
function validateMessage(x) {
    if (x.length < 10 && x.length != 0) {
        return "I enjoy reading from you...please type more into Message\n"
    }
    return ""
}

function sendMail(fullname, phone, email, message) {
    Email.send({
        SecureToken: "e940e40e-9733-46a8-b25e-69e2bde804f0",
        To: 'wr.samrra@gmail.com',
        From: "hello@waelm.net",
        Subject: "This is the subject",
        Body: (`<b>From:</b> ${fullname} <br>
<b>Phone number:</b> <a href="tel:${phone}">${phone}</a> <br>
<b>Email address:</b> <a href="mailto:${email}">${email}</a> <br>
<b>message:</b><br>
${message}`)
    }).then(
        message => feed(message)
    );
};

function feed(m) {
    if (m === "ok" || m === "OK" || m === "Ok") {
        alert("Thanks for your message! Will reply to you soon.")
        window.location.href = "/index.html";
    }
}