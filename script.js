let divelement=document.getElementById("box");
let but=document.getElementById("btn");
function hoverfunction(){
    divelement.textContent="Not now pls 😢"
}
function mouseoutfunction(){
    divelement.textContent="Click me😍"
    
}
function clickedfunction(){
    divelement.style.backgroubdcolor="tomato"
    divelement.textContent="I Love you so much 😘"
}
but.addEventListener("mouseover" , hoverfunction);
but.addEventListener("click" , clickedfunction);
but.addEventListener("mouseout" , mouseoutfunction);