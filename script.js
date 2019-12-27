$(document).ready(function(){
    $("#myCarousel").carousel();

    $(".item").click(function(){
        $("#myCarousel").carousel(1);
    });
      
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });



});