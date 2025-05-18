
var swiper = new Swiper(".visual", {
    slidesPerView : 1,
    loop : true,
    autoplay: {
        delay: 3000,
    },
  pagination: {
    el: ".visual .swiper-pagination",
    type: "fraction",
  }
});

var swiper = new Swiper(".best", {
    slidesPerView : 2,
    loop : true,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
    },

  navigation: {
    nextEl: ".best .swiper-button-next",
    prevEl: ".best .swiper-button-prev",
  },
  breakpoints: {
        
    960: {
      slidesPerView: 4 //브라우저가 1024보다 클 때
    },
  },
});

//topbtn
function clickme() {
    window.scrollTo({top:0, left:0, behavior:"smooth"});
 };

 //hambuger menu
$(document).ready(function() {
    $(".btn").click(function() {
      $("#menu,.page_cover,html").addClass("open");
      window.location.hash = "#open";
    })
})
    
    window.onhashchange = function() {
      if (location.hash != "#open") {
        $("#menu,.page_cover,html").removeClass("open");
      }
    };
    
 $(document).ready(function(){
    $("#menu ul.sub_mobile").hide();
    $("#menu ul.nav li").click(function(){
    $("ul",this).slideToggle("fast");
    })
})