$(function() {
    var window_h = $(window).height();

    $(".slideContsRotate").fadeIn(1500);
    $(".slideContsRotate").css({
        "transform": "rotateY(0deg)"
    });
//スクロールイベント
  $(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();

  $(".slideContsL").each(function() {
    var elem_pos = $(this).offset().top;
  　
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 100) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
  $(".slideContsR").each(function() {
    var elem_pos = $(this).offset().top;
  　
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 100) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});
});

$(function() {

  $(".list1").click(function() {
    $("html,body").animate({scrollTop:0});
  })

  $(".list2").click(function() {
    $("html,body").animate({scrollTop:$('.service').offset().top});
  })

  $(".list3").click(function() {
    $("html,body").animate({scrollTop:$('.company').offset().top});
  })

  $(".list4").click(function() {
    $("html,body").animate({scrollTop:$('.recruit').offset().top});
  })

  $(".list5").click(function() {
    $("html,body").animate({scrollTop:$('.contact-heading').offset().top});
  })
});