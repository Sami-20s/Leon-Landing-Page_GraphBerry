var burger = document.querySelector(".burger");
burger.addEventListener("click",() => {
    burger.classList.toggle("open")
})
var navLinks = document.querySelector(".navbar__links")
burger.addEventListener("click",() => {
    navLinks.classList.toggle("open")
})
var link = document.querySelectorAll(".navbar__links a");
for (s of link){
    s.addEventListener("click",()=> {
        navLinks.classList.toggle("open")
        burger.classList.toggle("open")
    })
}