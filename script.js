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

const heroSection = document.querySelector(".hero");

const circle = document.querySelector('.circle')
cross = document.querySelector('.cross')
thunder = document.querySelector('.thunder')
chain = document.querySelector('.chain')
layer = document.querySelector('.layer')



document.addEventListener('mousemove', function (e) {
    const x = e.clientX * 100 / window.innerWidth + '%'
    const y = e.clientY * 100 / window.innerHeight + '%'

    function imgAnimate(element) {
        element.style.left = x
        element.style.top = y
    }

    imgAnimate(circle)
    imgAnimate(layer)
    imgAnimate(cross)
    imgAnimate(chain)
    imgAnimate(thunder)
})

const hamburger = document.querySelector('.hamburger');
bars = document.querySelectorAll('.hamburger-bar')
sidebar = document.querySelector('.sidebar')

hamburger.addEventListener('click', function () {
    bars[0].classList.toggle('bar-up')
    bars[1].classList.toggle('bar-down')
    bars[2].classList.toggle('op0')
    sidebar.classList.toggle('r0')

})

