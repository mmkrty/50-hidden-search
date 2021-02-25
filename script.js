const button = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

button.addEventListener("click", function(){
    search.classList.toggle("active");
    //focus the input after clicking the button
    input.focus();
})