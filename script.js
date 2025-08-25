const hour = document.getElementById("hour");
const min = document.getElementById("minute");
const sec = document.getElementById("second");



function updateclock(){
    const now = new Date();
    const h = now.getHours();
    const s = now.getSeconds();
    const m = now.getMinutes();
    
    const hdeg = (h*30)+(0.5*m);
    const mdeg = (m*6)+(s*0.1);
    const sdeg = (s*6);
    
    
    
    hour.style.rotate = hdeg + "deg";
    min.style.rotate = mdeg + "deg";
    sec.style.rotate = sdeg + "deg";
    
    
}

setInterval(updateclock,1000);
updateclock();

const clock = document.getElementById("clock");
const body = document.querySelector("body");
const btn =document.getElementById("btn");
const tick = document.querySelectorAll(".tick");
const num = document.querySelectorAll(".number");
const hourl = document.querySelector("#hourl");
const h = document.querySelector("h2")
const h3 = document.querySelector("h3");




btn.addEventListener("click",function(){
    clock.classList.toggle("clock-light");
    body.classList.toggle("light");
    hourl.classList.toggle("light-hour");
    h.classList.toggle("h2-light");
    h3.classList.toggle("h3-light");
    num.forEach((el)=>{
        el.classList.toggle("numlight");

    })
    tick.forEach((ti)=>{
        ti.classList.toggle("tick-light");
    })
    if (btn.textContent === "switch to Light Mode") {
        btn.textContent = "Switch to Dark Mode";
    } else {
        btn.textContent = "Switch to Light Mode";
    }




})