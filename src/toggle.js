const toggle = document.getElementById("container");

const body = document.querySelector("moon");

toggle.onclick= function(){
    toggle.classList.toggle("active");
    body.classList.toggle("active");
}