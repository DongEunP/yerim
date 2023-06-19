$(function () {
  $("nav").hover(
    function () {
      $(this).find(".depth2").stop().fadeIn(500);
      $(".inner_bg").stop().slideDown(300);
      $(".main_bg").stop().fadeIn(300);
    },
    function () {
      $(this).find(".depth2").stop().fadeOut(200);
      $(".inner_bg").stop().slideUp(600);
      $(".main_bg").stop().fadeOut(300);
    }
  );

  $(".menu").hover(
    function () {
      $(this).find(">a").addClass("on");
    },
    function () {
      $(this).find(">a").removeClass("on");
    }
  );

  $(".search>a").click(function () {
    if ($(".search input").css("width") == "0px") {
      $(".search input").animate({ width: "110px" });
    } else {
      $(".search input").animate({ width: "0" });
    }
  });

  let hbgSlide = false;
  $(".hbg_btn").click(function (e) {
    $(".hbg_menu").stop().slideToggle();
    $(this).toggleClass("on");
    $("body").toggleClass("hidden");
    return (hbgSlide = true);
  });
  document.addEventListener("click", function (e) {
    if (hbgSlide == true) {
      //슬라이드 메뉴가 열려 있을때
      if (e.target.id != "loopBtn") {
        //e.target이 슬라이딩 이미지 재생 버튼이 아니면
        let tgEl = e.target;
        let header = tgEl.closest(".hbg"); //조상중 #header를 찾음-버튼이 header안에 있을 경우//

        if (!header) {
          //hdader이 조상이 아니면 닫기//
          $(".hbg_menu").slideUp();
          $(".hbg_btn").removeClass("on");
          $("body").removeClass("hidden");
          $(".main_bg").stop().fadeOut(300);
          return (gnbSlide = false);
        }
      }
    }
  });

  let hbg_on = false;
  $(".hbg_on>div").click(function (e) {
    $(this).next().slideToggle();
    $(this).find(".drop_icon").toggleClass("on");
    return (hbg_on = true);
  });

  let mySlide = false;
  $(".sign>img").click(function (e) {
    $(".sign>div").stop().slideToggle();
    $(".sign>div").css({ display: "flex" });
    $("body").toggleClass("hidden");
    return (mySlide = true);
  });
  document.addEventListener("click", function (e) {
    if (mySlide == true) {
      //슬라이드 메뉴가 열려 있을때
      if (e.target.id != "loopBtn") {
        //e.target이 슬라이딩 이미지 재생 버튼이 아니면
        let tgEl = e.target;
        let header = tgEl.closest(".sign"); //조상중 #header를 찾음-버튼이 header안에 있을 경우//

        if (!header) {
          //hdader이 조상이 아니면 닫기//
          $(".sign>div").slideUp();
          $("body").removeClass("hidden");
          $(".main_bg").stop().fadeOut(300);
          return (Slide = false);
        }
      }
    }
  });

  // 서브네비
  let filter = false;
  $(".filter_box").click(function (e) {
    $(this).next(".filter_list").slideToggle();
    $(this).find(".drop_icon").toggleClass("on");
    return (filter = true);
  });
  document.addEventListener("click", function (e) {
    if (filter == true) {
      //슬라이드 메뉴가 열려 있을때
      if (e.target.id != "loopBtn") {
        //e.target이 슬라이딩 이미지 재생 버튼이 아니면
        let tgEl = e.target;
        let header = tgEl.closest(".sec01"); //조상중 #header를 찾음-버튼이 header안에 있을 경우//

        if (!header) {
          //hdader이 조상이 아니면 닫기//
          $(".filter_list").slideUp();
          $(".drop_icon").removeClass("on");
          return (filterSlide = false);
        }
      }
    }
  });

  // 찜하기 장바구니 클릭
  // $("wish").on("click", function(e){
  //   var $this = $(this);//element a
  
  //   $this.attr("src", function(index, attr){
  //     if(attr.match('_fill')){
  //       return attr.replace("_fill.png", "_off.png");
  //     }else{
  //       return attr.replace("_off.png", "_fill.png");
  //     }   
  //   });
  // });
  // if($('.wish').attr(match('heart'))){
  //   $('.wish').click(function(){
  //     $(this).attr('src','img/heart_fill.png')
  //     return attr.replace('_fill')
  //   })
  // }else if($('.wish').attr(match('_fill'))){
  //   $('.wish').click(function(){
  //     $(this).attr('src','img/heart.png')
  //   })
  // }
    $('.wish').click(function(){
    $(this).attr('src','img/heart_fill.png')
    return attr.replace('_fill')
    })


  // 게시대 아이콘 호버
  $(".pro_icon").hover(
    function () {
      $(this).find(".icon_hover").css({ display: "flex" });
      $(this).find(">a>img").css({ border: "3px solid orange" });
    },
    function () {
      $(this).find(".icon_hover").css({ display: "none" });
      $(this).find(">a>img").css({ border: "3px solid white" });
    }
  );

  $(window).on("scroll", function () {
    var windowTop = $(window).scrollTop();
    if ($(window).scrollTop() >= 100) {
      $(".page_up").fadeIn();
      $("nav").css({ boxShadow: "0 3px 10px rgba(225, 225, 225, .8)" });
    } else if (windowTop <= 100) {
      $(".page_up").fadeOut();
      $("nav").css({ boxShadow: "none" });
    }
  });
});
