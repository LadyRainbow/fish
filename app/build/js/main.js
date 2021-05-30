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

    $('.catalog-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: $('.prev-catalog-arrow'),
        nextArrow: $('.next-catalog-arrow'),
        dots: false,
    });

    // abour sliders
    // slider-gramota
    $('.slider-gramota').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.prev-gramota-arrow'),
        nextArrow: $('.next-gramota-arrow'),
        dots: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $().fancybox({
        selector : '.slider-gramota .slick-slide:not(.slick-cloned) .fancy-link',
        backFocus : false
    });

    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
       source: availableTags
    });
    $( "#tagsMob" ).autocomplete({
       source: availableTags
    });
    // slider-vehi
    // $('.slider-vehi').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     fade: true,
    //     dots: true,
    //     prevArrow: $('.prev-vehi-arrow'),
    //     nextArrow: $('.next-vehi-arrow'),
    //     appendDots: '.dots-vehi-wrp',
    //     customPaging : function(slider, i) {
    //         var title = $(slider.$slides[i]).data('title');
    //         return '<a class="pager__item"> '+title+' </a>';
    //     },
    // });



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
    $('.mask-phone').mask('+7(999)999-99-99');

    // reset
    $('.clear-filters-btn').click(function () {
        $('input:checked').prop('checked', false);
    });

    // pagination
    if($('.catalog2-page').length) {
        $('#pagination-container').pagination({
            dataSource: [1, 2, 3, 4],
            pageSize: 1,
            showPrevious: true,
            showNext: true,
        });
    };

    // filter PopUp Catalog
    $('.filterPopUp-btn').click(function () {
        $('.pop-up-filter-mob').addClass('active');
    });
    $('.pop-up-filterPopUp-close-btn').click(function () {
        $('.pop-up-filter-mob').removeClass('active');
    });

    // cart1
    $('.cartBlock.cartBlock-absent').find('.cart-price-item span').text(0);

    function CounterFunc () {
        $(".quantity-cart-input").each(function () {
            var $thisCart = $(this).closest('.cartBlock');
            var price = $thisCart.find('.cart-price-item span').text();
            var cartPriceTotal = +price * $(this).val();
            $thisCart.find('.cart-price-total span').text(cartPriceTotal.toFixed(2));
        });
        $('.cartMainBlock').each(function () {
            var summ = 0;
            $(this).find('.cart-price-total span').each(function () {
                summ += +$(this).text();
            });
            $(this).find('.total-summa span').text(summ.toFixed(2));
        });

        var summTotal = 0;
        $('.total-summa span').each(function () {
            summTotal += +$(this).text();
            $('.final-summa-cifra span').text(summTotal.toFixed(2));
        });

    };

    CounterFunc ();

    $(".quantity-cart-input").on('input', function () {
        if($(this).val() == '' || $(this).val() == 0 || $(this).val() < 0) {
            $(this).val(0);
            $minus.addClass('disabled');
        } else {
            $minus.removeClass('disabled');
        };
        var $thisCart = $(this).closest('.cartBlock');
        var price = $thisCart.find('.cart-price-item span').text();
        var cartPriceTotal = +price * $(this).val();
        $thisCart.find('.cart-price-total span').text(cartPriceTotal.toFixed(2));
        var summ = 0;
        var summTotal = 0;
        $(this).closest('.cartMainBlock').find('.cart-price-total span').each(function () {
            summ += +$(this).text();
            $(this).closest('.cartMainBlock').find('.total-summa span').text(summ.toFixed(2));
        });
        $('.total-summa span').each(function () {
            summTotal += +$(this).text();
            $('.final-summa-cifra span').text(summTotal.toFixed(2));
        });
    });

    // INPUT CHANGE AMOUNT
     var $minus = $('.cartMinus');
     var $plus = $('.cartPlus');

     var $deleteCartBlock = $('.delete-block');


      $minus.click(function () {
           var $amountInput = $(this).parent().children('.quantity-cart-input');
           var count = parseInt($amountInput.val()) - 1;
           // count = count < 1 ? 1 : count;
           if(count < 0 || count == 0) {
               count = 0;
               $(this).addClass('disabled');
           } else {
               count = count;
               $(this).removeClass('disabled');
           };
           $amountInput.val(count);
           $amountInput.change();
           var $thisCart = $(this).closest('.cartBlock');
           var price = $thisCart.find('.cart-price-item span').text();
           var cartPriceTotal = +price * $thisCart.find('.quantity-cart-input').val();
           $thisCart.find('.cart-price-total span').text(cartPriceTotal.toFixed(2));
           var summ = 0;
           $(this).closest('.cartMainBlock').find('.cart-price-total span').each(function () {
               summ += +$(this).text();
               $(this).closest('.cartMainBlock').find('.total-summa span').text(summ.toFixed(2));
           });
           var summTotal = 0;
           $('.total-summa span').each(function () {
               summTotal += +$(this).text();
               $('.final-summa-cifra span').text(summTotal.toFixed(2));
           });
           return false;
       });
       $plus.click(function () {
           $(this).closest('.quantity-cart').find($minus).removeClass('disabled');
           var $amountInput = $(this).parent().children('.quantity-cart-input');
           $amountInput.val(parseInt($amountInput.val()) + 1);
           $amountInput.change();
           var $thisCart = $(this).closest('.cartBlock');
           var price = $thisCart.find('.cart-price-item span').text();
           var cartPriceTotal = +price * $thisCart.find('.quantity-cart-input').val();
           $thisCart.find('.cart-price-total span').text(cartPriceTotal.toFixed(2));
           var summ = 0;
           $(this).closest('.cartMainBlock').find('.cart-price-total span').each(function () {
               summ += +$(this).text();
               $(this).closest('.cartMainBlock').find('.total-summa span').text(summ.toFixed(2));
           });
           var summTotal = 0;
           $('.total-summa span').each(function () {
               summTotal += +$(this).text();
               $('.final-summa-cifra span').text(summTotal.toFixed(2));
           });
           return false;
       });

       // DELETE cartBlock
       // $deleteCartBlock.click(function () {
       //     var $cartBlock = $(this).closest('.cartBlock');
       //     $cartBlock.find('.cart-price-total span').text(0);
       //     var summ = 0;
       //     $('.cart-price-total span').each(function () {
       //         summ += +$(this).text();
       //         $('.total-summa span').text(summ);
       //     });
       //     if ($('.lk-page').length) {
       //         var discSumma = Number( $('.total-lk .total-summa span').text()) + Number($('.total-lk .disc-amount span').text());
       //         $('.disc-summa span').text(discSumma);
       //         if(discSumma < 0) {
       //             $('.disc-summa span').text(0);
       //         } else {
       //             $('.disc-summa span').text(discSumma);
       //         }
       //     }
       //      setTimeout(function() {
       //           $cartBlock.slideUp();
       //      }, 200);
       //  });

        if(windowWidth >= 1200)  {
            if ($('.product-img-prev-wrp').length <= 7) {
                $('.slider-prev-wrp').addClass('stop-slide');
            } else {
                $('.slider-prev-wrp').removeClass('stop-slide');
            }
        } else {
            if(windowWidth < 768) {
                if ($('.product-img-prev-wrp').length <= 4) {
                    $('.slider-prev-wrp').addClass('stop-slide');
                } else {
                    $('.slider-prev-wrp').removeClass('stop-slide');
                }
            } else {
                if ($('.product-img-prev-wrp').length <= 5) {
                    $('.slider-prev-wrp').addClass('stop-slide');
                } else {
                    $('.slider-prev-wrp').removeClass('stop-slide');
                }
            }
        };

         // slick product card
         $('.product-img-main').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              fade: true,
              focusOnSelect: true,
              asNavFor: '.product-img-prev',
              responsive: [
                  {
                      breakpoint: 767,
                      settings: {
                          dots: false,
                           asNavFor: '.product-img-prev',
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
         });
         $('.product-img-prev').slick({
              slidesToShow: 7,
              arrows: false,
              slidesToScroll: 1,
              asNavFor: '.product-img-main',
              dots: false,
              // infinite: false,
              focusOnSelect: true,
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          dots: false,
                          slidesToShow: 5,
                          slidesToScroll: 1,
                           asNavFor: '.product-img-main',
                      }
                  },
                  {
                      breakpoint: 768,
                      settings: {
                          dots: false,
                          asNavFor: '.product-img-main',
                          vertical: false,
                          slidesToShow: 4,
                          slidesToScroll: 1,
                           asNavFor: '.product-img-main',
                      }
                  },
              ]
        });

    // pop-ups
    function thnx () {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#thnx').addClass('active');
    };
    // 1 pop-up
    $('.open-pop-beClient').click(function (e) {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#beClient').addClass('active');
    });
    // 2 pop-up
    $('.open-pop-beConverters').click(function (e) {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#beConverters').addClass('active');
    });
    // 3 pop-up for opt
    $('.open-pop-beOpt').click(function (e) {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#beOpt').addClass('active');
    });
    // 4 pop-up for beSupplier
    $('.open-pop-beSupplier').click(function (e) {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#beSupplier').addClass('active');
    });
    // 5 pop-up for Cart
    $('.open-pop-cart-btn').click(function (e) {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#miniCartPopUp').addClass('active');
    });
    // 6 pop-up for One Click
    $('.open-pop-one-click').click(function (e) {
        $overlayPopUpWRP.addClass('active');
        $('body, html').addClass('active');
        $popUpGeneralBlock.removeClass('active');
        $('#oneClickPopUp').addClass('active');
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

    // drag & drop
    var $fileInput = $('.file-input');

    // highlight drag area
    $fileInput.on('dragenter focus click', function() {
      $(this).closest('.file-drop-area').addClass('is-active');
    });

    // back to normal state
    $fileInput.on('dragleave blur drop', function() {
      $(this).closest('.file-drop-area').removeClass('is-active');
    });

    // change inner text
    $fileInput.on('change', function() {
        var thisInput = $(this);
      var filesCount = $(this)[0].files.length;
      var filesSize = this.files[0].size;
      var filesSizeKb;
      var $textContainer = thisInput.closest('.file-drop-area').find('.file-msg');

    if (filesCount > 0)  {
        if (filesSize > 10048576) {
            thisInput.closest('.file-drop-area').find('.drop-success').addClass('hidden');
            thisInput.closest('.file-drop-area').find('.drop-error').removeClass('hidden');
            thisInput.val('');
        } else {
            thisInput.closest('.file-drop-area').addClass('active');

            thisInput.closest('.file-drop-area').find('.drop-success').removeClass('hidden');
            thisInput.closest('.file-drop-area').find('.drop-error').addClass('hidden');

            thisInput.closest('.file-drop-area').find('.remove').addClass('active');
            thisInput.closest('.file-drop-area').find('.fake-btn').addClass('hidden');

            filesSizeKb = filesSize / 1024;
            thisInput.closest('.file-drop-area').find('.file-size').addClass('active').text(filesSizeKb.toFixed() + ' Кб');;

            if (filesCount === 1) {
            // if single file is selected, show file name
                var fileName = $(this).val().split('\\').pop();
                $textContainer.addClass('active').text(fileName);
            } else {
                // otherwise show number of files
                $textContainer.text('Выбрано файлов: ' + filesCount);
            }
        }
      }
    });
    $('.remove').click(function () {
        $(this).closest('.file-drop-area').removeClass('active');
        $(this).removeClass('active');
        $(this).closest('.file-drop-area').find('.file-size').removeClass('active').text('');
        $(this).closest('.file-drop-area').find('.file-input').val('');
        $(this).closest('.file-drop-area').find('.file-msg').removeClass('active').text('резюме');
        $(this).closest('.file-drop-area').find('.fake-btn').removeClass('hidden');
    });

});
