const e = document.onmousemove
const timeFrame = 200;
var lastTime = 0;
document.querySelector(".fullpage-header").addEventListener("mousemove", parallax);
document.querySelector(".projects-section").addEventListener("mousemove", parallaxButterfly);
document.querySelector(".cta-section").addEventListener("mousemove", parallaxButterfly);

function parallax(e) {
    var now = new Date();
    if (now - lastTime >= timeFrame) {
        this.querySelectorAll(".layer").forEach(Layer => {
            const speed = Layer.getAttribute('data-speed')
            const rotation = Layer.getAttribute('rotation')
            const scale = Layer.getAttribute('scale')
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            
            Layer.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotation}deg) scale(${scale}, 1)`
        })
        lastTime = now;
    }
}

function parallaxButterfly(e) {
    var now = new Date();
    if (now - lastTime >= timeFrame) {
        this.querySelectorAll(".layerButter").forEach(Layer => {
            const speed = Layer.getAttribute('data-speed')
            const rotation = Layer.getAttribute('rotation')
            const scale = Layer.getAttribute('scale')
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            
            Layer.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotation}deg) scale(${scale}, 1)`
        })
        lastTime = now;
    }
}

document.getElementById("year").textContent = new Date().getFullYear();