// JavaScript Document

$(document).ready(function(){
    $(".leftcolumn-toggle").click(function(){
    $("nav").insertAfter("header");
	$("nav").slideToggle();
	$('.ads-sec').toggleClass('padtop10');
	$('.loginbox').toggleClass('martop');
    });
		
	$('.navsub').click(function() {
		$('.navsub-content').toggle();
	});
	
	
	$('.close, .ads-sec, .middle-sec, footer').click(function() {
	  $('.navsub-content').hide();
	});

	

    $(".scroll-to-top").hide();
});

$(window).bind("scroll", function() {
		 if ($(this).scrollTop() > 100) {
			$(".scroll-to-top").show();
	    } else {
	        $(".scroll-to-top").hide();
	    }
	});
	function scrollWin() {
    window.scrollTo(0, 0);
}


function toggleview(id){
    if(document.getElementById(id).style.display == "block"){
        document.getElementById(id).style.display = "none";
    }else{
        document.getElementById(id).style.display = "block";
    }
  }
