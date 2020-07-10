
// var width = document.body.clientWidth;
// var wrapper = document.querySelector(".footer-links-wrapper");
// function toggleFunction(){
//     if(width < 768){
//         wrapper.classList.add("someClass");
//         $(".someClass h3").next("ul").slideToggle();
//         $(".someClass h3").toggleClass("expanded");
//     }else{
//         wrapper.classList.remove("someClass");
//         $(wrapper + " ul").show();
//     }
//  }
//  console.log(width);
//  console.log(wrapper);
//  console.log($(".someClass h3"));
//  $("h3").on("click", ".someClass h3", toggleFunction);

if ($(window).width() <= 768){	
		$('.footer-links-wrapper').addClass("someClass");
	}else{
		$('.footer-links-wrapper').removeClass("someClass");
	}
	$(window).on('resize', function(event){
		if ($(window).width() <= 768){	
			$('.footer-links-wrapper').addClass("someClass");
		}else{
			$('.footer-links-wrapper').removeClass("someClass");
			$('.footer-links-wrapper ul').show();
		}	
	});
// Footer collapse functionality 
$(document).on("click", ".someClass h3", function(){
    $(this).next('ul').slideToggle();
    $(this).toggleClass("expanded");
});
   
   
	


