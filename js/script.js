// $(document).ready(function(){
//   $(".list").on('click', function(){
//     $(this).siblings().removeClass("active");
//     $(this).addClass("active");
//   })
// })
$(document).on('click', 'ul li' , function(){
  $(this).addClass('active').siblings().removeClass('active')
})


// furniture js

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
