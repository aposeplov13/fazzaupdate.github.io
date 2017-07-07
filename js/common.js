$(document).ready(function(){
	//advantage_sliderlink
	$(".advantage_sliderlink").on('click', function(){
		$(this).attr("href",$(".advantage_slider .slick-current").attr("href"));
	});
	//advantage_sliderlink END
	//test_sliderlink
	$(".test_sliderlink").on('click', function(){
		$(this).attr("href",$(".test_slider .slick-current").attr("href"));
	});
	//test_sliderlink END
	//menusecond collapse
	$(".btn_menusecond").click(function(){
		$(".menusecond").toggle("slow");
	});	
	//menusecond collapse END
	//brandrepair collapse on 1024 and 767
	$(".btn_brandrepair").click(function(){
		$(".brandrepair_item-hide").toggle("slow");
	});	
	//brandrepair collapse on 1024 and 767 END
	// media query 1024 and 767 for menusecond and brandrepair
	function mediaSize() { 
		if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {
			$(".brandrepair_item").slice(15,).addClass("brandrepair_item-hide").hide();
		} else if (window.matchMedia('(max-width: 767px)').matches) {
			$(".brandrepair_item").slice(9,).addClass("brandrepair_item-hide").hide();
		}
		else if (window.matchMedia('(min-width: 1024px)').matches) {
			$(".brandrepair_item-hide").show();	
		}
	};
  mediaSize();
	window.addEventListener('resize', mediaSize, false);  
	// media query 1024 and 767 for menusecond and brandrepair END
	//slick slider pricelist
	$(".price_slider-item").slick({
		slidesToShow: 3,
  	slidesToScroll: 5,
		centerMode: true,
		responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				centerMode: false
      }
    }
  ]
	});
	//slick slider pricelist END
	//advantage_slider
	$().fancybox({
		selector : '[data-fancybox="images"]',
		thumbs   : false,
		hash     : false,
	});
	$(".advantage_slider").slick({
			slidesToShow   : 5,
			slidesToScroll : 2,
			dots       : false,
			arrows     : false,
			responsive: [
		{
			breakpoint: 1279,
			settings: {
				slidesToShow: 6,
				arrows     : false,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 767,
			settings: {
				dots       : true,
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: false
			}
		},
		{
			breakpoint: 420,
			settings: {
				dots       : true,
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: false
			}
		}
		]
	});
	//advantage_slider END
	//map_slider
	//map_slider END
	//map_slider
	$(".map_slider").slick({
		slidesToShow   : 3,
		slidesToScroll : 2,
		arrows     : false,
		dots       : false,
		responsive: [
		{
			breakpoint: 1023,
			settings: {
				dots       : true,
				slidesToShow: 5,
				slidesToScroll: 1,
				centerMode: false
			}
		},
		{
			breakpoint: 767,
			settings: {
				dots       : true,
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: false
			}
		}
		]	
	});
	//map_slider END
});
	
	


