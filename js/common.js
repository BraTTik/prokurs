$(document).ready(function() {

  function resizeHeaderHeight() {
    let height = $(window).height();
    $("header").css({ "min-height": height + "px" });
  }

  resizeHeaderHeight();

    $(window).resize(() => {
    resizeHeaderHeight();
  });

  function initTab(selector) {
    $(`${selector} .tab_item`)
      .not(":first")
      .hide();
    $(`${selector} .wrapper .tab`)
      .click(function() {
        $(`${selector} .wrapper .tab`)
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
        $(`${selector} .tab_item`)
          .hide()
          .eq($(this).index())
          .fadeIn();
      })
      .eq(0)
      .addClass("active");
  }

  initTab(".top-line");
  initTab(".header-tab");
  initTab("#map");
  initTab("footer")

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
	loop: true,
	updateOnWindowResize: true,
	navigation: {
		nextEl: '.next-btn',
		prevEl: '.prev-btn',
	  },
  });

  $('.img-wrap a').magnificPopup({type:'image'});


  //Цели для Яндекс.Метрики и Google Analytics
  $(".count_element").on("click", function() {
    ga("send", "event", "goal", "goal");
    yaCounterXXXXXXXX.reachGoal("goal");
    return true;
  });

  //Кнопка "Наверх"
  //Документация:
  //http://api.jquery.com/scrolltop/
  //http://api.jquery.com/animate/
  $("#top").click(function() {
    $("body, html").animate(
      {
        scrollTop: 0
      },
      800
    );
    return false;
  });

  //Аякс отправка форм
  //Документация: http://api.jquery.com/jquery.ajax/
  $("form").submit(function() {
    $.ajax({
      type: "GET",
      url: "mail.php",
      data: $("form").serialize()
    }).done(function() {
      alert("Спасибо за заявку!");
      setTimeout(function() {
        $.fancybox.close();
      }, 1000);
    });
    return false;
  });
});

// Адаптивные скрипты, которые срабатывают только при определенном разрешении экрана
// Документация: https://github.com/maciej-gurban/responsive-bootstrap-toolkit
/* (function($, document, window, viewport) {
  function resizeWindow() {
    // $("a").click(function() {
    // 	if (viewport.is("lg")) {
    // 		return false;
    // 	};
    // });
  }
  $(document).ready(function() {
    resizeWindow();
  });
  $(window).bind("resize", function() {
    viewport.changed(function() {
      resizeWindow();
    });
  });
})(jQuery, document, window); */


