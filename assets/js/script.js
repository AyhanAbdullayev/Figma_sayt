let navbar = document.getElementById("navbar");
let menu = document.getElementById("mobile-menu")
let button = document.getElementById("m-t")
let up_arrow = document.getElementById("up-arrow")
let section = document.getElementById("text")
window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        navbar.style.position="fixed";
        navbar.style.boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
        navbar.style.zIndex="10";
        up_arrow.style.display="flex";
    }
    else{
        navbar.style.position="relative";
        navbar.style.boxShadow="none";
        up_arrow.style.display="none";
    }
})

button.addEventListener("click",()=>{
    let result = button.classList.toggle("open");
    if(result){
        menu.classList.add("open-menu")
        menu.style.fontSize="100px";
    }
    else{
        menu.classList.remove("open-menu")
    }
})
up_arrow.addEventListener("click",()=>{
    window.location.href="#text";
})