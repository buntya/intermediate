//アコーディオンメニュー
$(function(){
  $('.js-faq-item-link').each(function(){
      $(this).on('click',function(){
          $(this).toggleClass('on');
          $("+.answer",this).slideToggle()
          return false;
      });
  });
});


//Swiper
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  centeredSlides: true,
  autoplay:{
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
  breakpoints:{
    1022:{
      slidesPerView: 3.78191,
      spaceBetween:56
    },
    200:{
      slidesPerView:2,
      spaceBetween:20
    },
  }
});


//AOS.js
//ポップアップアニメーション
AOS.init();


//スムーススクロール
$(function(){
  // #で始まるa要素をクリックした場合に処理
  $('a[href^="#"]').click(function(){
    // 移動先を調整する。0を30にすると30px下にずらすことができる。
    var adjust = -$('header').height();
    // スクロールの速度（ミリ秒）
    var speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


// お問い合わせを全ての項目を入力して、プライバシーポリシーに同意しないと送信できないようにする
$(document).ready(function () {

  const $submitBtn = $('#submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form textarea').val() !== "" &&
      $('#form #privacy').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});



//お問い合わせ完了メッセージを出す
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeL30XbEc8strBydp9BZaXHHOv29511yMn3NxWtAW5je4IUjg/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
        }
      }
    });
    event.preventDefault();
  });

});


//ハンバーガーメニュー
(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
    $('body').toggleClass('noscroll');
    $('.open #nav a[href]').on('click', function(event) {
      $btn.trigger('click');
  });
  });

})(jQuery);