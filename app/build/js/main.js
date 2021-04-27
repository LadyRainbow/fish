$ = jQuery.noConflict(true);
$(document).ready(function () {
    var $window = $(window);
    var windowHeight = $window.height();
    var windowWidth = $window.width();
    var $header = $('header');

    var $popUpGeneralBlock = $('.pop-up-general-block');

    var $overlayPopUpWRP = $('.pop-up-overlay-wrapper');
    var $overlay = $('.overlay-pop-up');
    var $closePopUpBtn = $('.pop-up-general-block-close-btn');

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    let vhMenu = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vhMenu', `${vhMenu}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vhMenu = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vhMenu', `${vhMenu}px`);
    });

    // header-pop-up
    $('.header-phone-arrow').click(function () {
        $('.header-phone-block').toggleClass('active')
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".header-phone-block"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('active');
		}
	});

    // language
    $('.lang-list li').click(function () {
        $('.lang-list li').removeClass('active');
        $(this).addClass('active');
    });

    // scroll header
    $(window).scroll(function() {
        headerChange();
    });
    headerChange();

    function headerChange () {
        if(windowWidth < 768) {
            if($window.scrollTop() > 100) {
                $header.addClass('header-scroll');
            } else {
                $header.removeClass('header-scroll');
            }
        }
    };

    // soft scroll
    // if($('main').length){
    //     $(".scrollTo").on("click", function (event) {
    //         // исключаем стандартную реакцию браузера
    //         event.preventDefault();
    //         $('.burger').removeClass('active');
    //         $('.menu').removeClass('active');
    //         $('body').removeClass('active');
    //         var id  = $(this).attr('href');
    //         if(windowWidth < 768) {
    //             var top = $(id).offset().top - 20;
    //         } else {
    //             var top = $(id).offset().top;
    //         }
    //         $('body,html').animate({scrollTop: top}, 500);
    //         // анимируем переход к блоку, время: 500 мс
    //
    //         // находим высоту, на которой расположен блок
    //     });
    // } else {
    //     $(".scrollToMenu").each(function() {
    //         var href = $(this).attr('href');
    //         href = '/' + href;
    //         $(this).attr('href', href);
    //     });
    // };

    //
    // $('.row-masonry').masonry({
    //     itemSelector: '.block-masonry-wrp',
    // });




    // switch advise in restourants page
    $('.partner-tab li').click(function () {
        var dataAdvise = $(this).attr('data-advise');
        $('.partner-tab li').removeClass('active');
        $(this).addClass('active');
        $('.advise-body').removeClass('active');
        $('#' + dataAdvise + '.advise-body').addClass('active');
    });

    // chnge text's height
    if(windowWidth > 767) {
        $('.block-masonry-text').each(function (index, value){
            var heightText = $(this).height() + 9;
            $(this).closest('.block-masonry-content').css('transform', 'translateY(' + heightText + 'px)')
        });
    };


    // slider
    $('.news-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.prev-news-arrow'),
        nextArrow: $('.next-news-arrow'),
        dots: false,
        responsive: [
            {
                breakpoint: 1292,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 935,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.meet-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev-meet-arrow'),
        nextArrow: $('.next-meet-arrow'),
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


   // form checked
    $('.checkbox-check').change(function() {
      if(this.checked) {
          $(this).closest('form').find('.btn-checkbox').removeClass('btn-checkbox-disabled');
      }
      else {
          $(this).closest('form').find('.btn-checkbox').addClass('btn-checkbox-disabled');
      }
    });

    // menu
    $('.burger').click(function () {
        $('.burger').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('active');
        // $header.toggleClass('header-scroll');
    });

    // only number
    $(".input-number").keypress(function(event){
      event = event || window.event;
      if (event.charCode && event.charCode!=0 && event.charCode!=8 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
        return false;
    });

    // masked
    $('.mask-phone').mask('+7(99999?9999999999', {placeholder: ""});


    // pop-ups
    function thnx () {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#thnx').addClass('active');
    };

    $('.open-pop-up-menu').click(function (e) {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#buyTicket').addClass('active');
        $('.burger').removeClass('active');
        $('.menu').removeClass('active');
        $('body').removeClass('active');
    });
    $('.open-pop-buyTicket').click(function (e) {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#buyTicket').addClass('active');
    });
    $('.open-accred-btn').click(function (e) {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#accredBlock').addClass('active');
    });

    $overlay.click(function () {
        $overlayPopUpWRP.removeClass('active');
        $('body, html').removeClass('active');
        $popUpGeneralBlock.removeClass('active');
    });
    $closePopUpBtn.click(function () {
        $overlayPopUpWRP.removeClass('active');
        $('body, html').removeClass('active');
        $popUpGeneralBlock.removeClass('active');
    });

    // map section
    ymaps.ready(init);

    var centerMap = [59.795277, 30.820440];
    function init(){
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: centerMap, // Москва
            zoom: 8
        });

        myGeoObject = new ymaps.GeoObject({
           // Описание геометрии.
           geometry: {
               type: "Point",
               coordinates: centerMap,
               // iconContent: '12'
           },
        },
        {
            preset: 'islands#darkBlueDotIcon'
        });
        myMap.geoObjects.add(myGeoObject);
    };

});
