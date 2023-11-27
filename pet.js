var slideindex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideindex++;
  if (slideindex > x.length) {slideindex = 1}
  x[slideindex-1].style.display = "block";
  setTimeout(carousel, 2000); 
}
$(window).scroll(function() {
  if ($(window).scrollTop() >= 50) {
    $('.header').css('opacity', '0.6');
  } else {
    $('.header').css('opacity', '1');
  }
});
