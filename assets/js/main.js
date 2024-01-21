// ! ==========> side nav bar
$(document).ready(function(){
  $('nav').css('display' , 'block')
})
const width = $(".nav-inner").width();

$(".nav-inner").css("left", -width);

$(".open").click(function () {
  $('nav').css("transition", "1s")

  $(".nav-inner").css("transition", "1s");

  $(".nav-inner").css("left", "0px");
});

$(".close").click(function () {
  $(".nav-inner").css("left", -width);
});

// ! ==========> singers list

$("h2").click(function (e) {
  if ($(e.target).next("p").css("display") == "none") {
    $(".singers p").slideUp(1000);
    $(e.target).next("p").slideDown(1000);
  } else {
    $(e.target).next("p").slideUp(1000);
  }
});

// ! ==========> counting down

let countDownDate = new Date("Dec 31,  2024 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let timeDiff = countDownDate - dateNow;

  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  let secounds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  $(".days").html("-" + days);

  $(".hours").html(hours);

  $(".minutes").html(minutes);

  $(".secounds").html(secounds);
}, 1000);

// !=========> Text area

$("textarea").keyup(function () {
  let counterUp = (0 + $(this).val().length) 
  
  if (counterUp >= 100) {
    $(".max-textarea").text("Your available characters are finished");
    
    
  } else {
    $(".max-textarea").text(100 - $(this).val().length);
  }
});
