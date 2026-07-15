const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navMenu");

hamburger.addEventListener("click",()=>{

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        hamburger.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }else{

        hamburger.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});