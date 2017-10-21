$( function() {
	// Scroll
	$(".scroll").click(function(event){
	//Перехватываем обработку по умолчанию события нажатия мыши
	event.preventDefault();
			
	//Получаем полный url - например, mysitecom/index.htm#home
	var full_url = this.href;
			
	//Разделяем url по символу # и получаем имя целевой секции - home в адресе mysitecom/index.htm#home
	var parts = full_url.split("#");
	var trgt = parts[1];
			
	//Получаем смещение сверху для целевой секции
	var target_offset = $("#"+trgt).offset();
	var target_top = target_offset.top;
			
	//Переходим в целевую секцию установкой позиции прокрутки страницы в позицию целевой секции
	$('html, body').animate({scrollTop:target_top}, 500);
	});

	//slicknav init
	$('.menu').slicknav({
		appendTo: '.slick',
		label: ''
	});

	// magnificPopup init
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

	//bxSlider init
	$('.slider').bxSlider({
		pager: 'false'

	});

	$('.trainer-slider').bxSlider({
		mode: 'fade',
		pager: 'true'

	});



	$('.btn_price').hover(
       function(){ $(this).parent().addClass('hover') },
       function(){ $(this).parent().removeClass('hover') 
   })

});
