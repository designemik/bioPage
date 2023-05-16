let preloader = document.getElementById("preloader");
let newpage_close_btn = document.getElementById("new-page-close");
let new_page = document.getElementById("new-page");
let about_btn = document.getElementById("about-btn");

window.addEventListener("load", function(){
    preloader.style.display = "none";
})


newpage_close_btn.addEventListener("click", function(){
    new_page.style.display = "none";
})

about_btn.addEventListener("click", function(){
    new_page.style.display = "block";
})