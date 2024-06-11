const stars = document.querySelector(".stars")
const moon = document.querySelector(".moon")
const mountainsBehind = document.querySelector(".mountains__behind")
const title = document.querySelector(".title")
const btn = document.querySelector(".btn")
const mountainsFront = document.querySelector(".mountains__front")
const scrollCloud = document.querySelectorAll(".scroll__cloud")
const scrollBoat = document.querySelector(".scroll__boat")
const span = document.querySelector(".span")

window.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    stars.style.left = scroll * 0.25 + "px"
    moon.style.top = scroll + 1.04 + "px"
    mountainsBehind.style.top = scroll * 0.5 + "px"
    mountainsFront.style.top = scroll * 0 + "px"
    title.style.transform = `translate(${scroll * -4}px)` 
    title.style.marginTop = scroll * 1.5 + "px"
    btn.style.marginTop = scroll * 1.5 + "px"
    span.style.width = scroll * 0.14 + "%"

    for (let i = 0; i < scrollCloud.length; i++) {
        const speed = scrollCloud[i].getAttribute("data-speed")

        scrollCloud[i].style.transform = `translateX(${this.scrollY / 10 * speed}px)`
    }
    scrollBoat.style.transform = `translateX(${this.scrollY / 5}px) rotateY(180deg)`
})