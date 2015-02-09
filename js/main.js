$(function () {
    $(".button-collapse").sideNav();
})
$(document).ready(function() {
$(window).resize(function(){
  var bodyHeight = $("body").height();
  var vwptHeight = $(window).height();
  if (vwptHeight > bodyHeight) {
    $("footer").css("position","absolute").css("bottom",0);
  }
});
    $(window).resize();
});