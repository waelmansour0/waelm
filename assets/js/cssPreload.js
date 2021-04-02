// "/assets/css/style.css", "/assets/css/components/responsive.css", 
var links = ["/assets/css/components/keyframes.css", "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;600&display=swap"]
var headElement = document.getElementsByTagName("head")[0];
for (var i = 0; i < links.length; i++) {
    var linkElement = document.createElement("link");
    linkElement.href = links[i];
    linkElement.rel = "stylesheet";
    headElement.appendChild(linkElement);
}

var scripts = ["/assets/plugins/lazysizes.min.js"]
var headElement = document.getElementsByTagName("head")[0];
for (var i = 0; i < scripts.length; i++) {
    linkElement = document.createElement("script");
    linkElement.src = scripts[i];
    headElement.appendChild(linkElement);
}