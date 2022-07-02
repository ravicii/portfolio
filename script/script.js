let stars=document.getElementById("stars")
let moon=document.getElementById("moon")
let mountains_behind=document.getElementById("mountains_behind")
let mountains_front=document.getElementById("mountains_front")
let name=document.getElementById("name")
let btn=document.getElementById("btn")
let nav=document.querySelector(".nav")
window.addEventListener('scroll',function(){
    let delY=window.scrollY
    stars.style.left=0.2*delY+'px'
    moon.style.top=1.05*delY+'px'
    mountains_behind.style.top=0.35*delY+'px'
    name.style.marginRight=2*delY+'px'
    btn.style.marginTop=1.05*delY+'px'
    nav.style.marginTop=0.2*delY+'px'
})