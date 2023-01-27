let frontend = "Frontend Developer"
let freelancer = "Freelancer"
let designer = "Web Designer"

const typed = new Typed(".auto-text", {
    strings: [frontend, designer, freelancer],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true
})

const heroimg = document.querySelector(".animatehero")

setInterval(() => {
    heroimg.classList.toggle("translate-y-6")
}, 3000);