let close = document.querySelector(".close")
let menu = document.querySelector(".hamburger-menu")
let hamburger = document.querySelector(".responsive-home > img")
close.onclick = () =>{
    close.style.animation = "animation"
    menu.style.display = "none"
    hamburger.style.display = "block"
}
hamburger.onclick = () =>{
    hamburger.style.display = "none"
    menu.style.display = "block"
}
let options = document.querySelectorAll(".nav-hamburger > li")
options.forEach((option)=>{
    option.addEventListener("click",()=>{
        menu.style.display = "none"
        hamburger.style.display = "block"  
    })
})