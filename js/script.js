$(function () {


  // 메인 패럴렉스

  //슬라이드
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");


  // 섹션2
  var swiper = new Swiper(".swiper1", {
    slidesPerView: 1,
    spaceBetween: 50,
    resistance: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      681: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });


  // 섹션2 호버
  $(".sec02_right li").hover(function () {
    $(this).find("img").animate({ scale: "1.2" });
    $(this).animate({ border: "2px solid yellow" });
  });

  // 섹션6 호버
  $(".sec06_wrap li:not(:first-child)").hover(
    function () {
      $(this).find(".sec06_item").stop().fadeIn().css({ display: "flex" });
      $(".sec06_wrap li:first-child .sec06_item").stop().fadeOut();
      $(this).find("h3>a").css({ scale: "1.2" });
    },
    function () {
      $(this).find(".sec06_item").stop().fadeOut();
      $(this).find("h3>a").css({ scale: "1" });
      const main = $(".sec06_wrap li:first-child .sec06_item").stop().fadeIn();
      setTimeout(main, 2000);
    }
  );
  $(".sec06_wrap li:first-child").hover(
    function () {
      $(this).find("h3>a").css({ scale: "1.2" });
    },
    function () {
      $(this).find("h3>a").css({ scale: "1" });
    }
  );

  // 스크롤이벤트

  const scroll = $(window).on("scroll", function () {
    var windowTop = $(window).scrollTop();
    if ($(".sec03").position().top - 600 <= windowTop) {
      $(".sec03").addClass("on");
      $(".sec03 .sec_title").fadeIn();
    } else if (windowTop == 0) {
      $(".sec03").removeClass("on");
      $(".sec03 .sec_title").css({ display: "none" });
    }
    if ($(".sec05").position().top - 600 < windowTop) {
      $(".sec05").addClass("on");
      $(".sec05 .sec_title").fadeIn();
    } else if (windowTop == 0) {
      $(".sec05").removeClass("on");
      $(".sec05 .sec_title").css({ display: "none" });
    }
    // console.log(windowTop);
  });

  // 페이지업
  $(".page_up").click(function () {
    $("html").animate({ scrollTop: $("html").offset().top }, 500);
  });


  // 메인 백그라운드
  $(function bgCir() {
    const cir1 = document.createElement("div");
    cir1.classList.add("bg_cir");
    gsap.set(cir1, {
      width: 18,
      height: 18,
      border: "solid 1px #4d98f0",
      borderRadius: "50%",
      position: "absolute",
      top: "10%",
      left: "20%",
    });
    const cir2 = document.createElement("div");
    cir2.classList.add("bg_cir");
    gsap.set(cir2, {
      width: 24,
      height: 24,
      background: "#cb88ea",
      borderRadius: "50%",
      position: "absolute",
      top: "20%",
      left: "10%",
    });
    const cir3 = document.createElement("div");
    cir3.classList.add("bg_cir");
    gsap.set(cir3, {
      width: 24,
      height: 24,
      background: "#d3d655",
      borderRadius: "50%",
      position: "absolute",
      top: "30%",
      left: "40%",
    });
    const cir4 = document.createElement("div");
    cir4.classList.add("bg_cir");
    gsap.set(cir4, {
      width: 10,
      height: 10,
      background: "#11a89e",
      borderRadius: "50%",
      position: "absolute",
      top: "60%",
      left: "15%",
    });
    const cir5 = document.createElement("div");
    cir5.classList.add("bg_cir");
    gsap.set(cir5, {
      width: 25,
      height: 25,
      border: "solid 1px #eba757",
      borderRadius: "50%",
      position: "absolute",
      top: "80%",
      left: "60%",
    });
    const cir6 = document.createElement("div");
    cir6.classList.add("bg_cir");
    gsap.set(cir6, {
      width: 28,
      height: 28,
      background: "#d3d655",
      borderRadius: "50%",
      position: "absolute",
      top: "90%",
      left: "80%",
    });
    const cir7 = document.createElement("div");
    cir7.classList.add("bg_cir");
    gsap.set(cir7, {
      width: 10,
      height: 10,
      border: "solid 1px #4d98f0",
      borderRadius: "50%",
      position: "absolute",
      top: "90%",
      left: "5%",
    });
    const cir8 = document.createElement("div");
    cir8.classList.add("bg_cir");
    gsap.set(cir8, {
      width: 17,
      height: 17,
      background: "#e73930",
      borderRadius: "50%",
      position: "absolute",
      top: "40%",
      left: "70%",
    });
    const cir9 = document.createElement("div");
    cir9.classList.add("bg_cir");
    gsap.set(cir9, {
      width: 16,
      height: 16,
      background: "#e73930",
      borderRadius: "50%",
      position: "absolute",
      top: "80%",
      left: "30%",
    });
    const cir10 = document.createElement("div");
    cir10.classList.add("bg_cir");
    gsap.set(cir10, {
      width: 18,
      height: 18,
      border: "solid 1px #4d98f0",
      borderRadius: "50%",
      position: "absolute",
      top: "60%",
      left: "95%",
    });

    const sec01 = $(".sec01");

    sec01.append(cir1);
    sec01.append(cir2);
    sec01.append(cir3);
    sec01.append(cir4);
    sec01.append(cir5);
    sec01.append(cir6);
    sec01.append(cir7);
    sec01.append(cir8);
    sec01.append(cir9);
    sec01.append(cir10);
  });

  $(function initEvent(){
		const cir = document.querySelectorAll('.bg_cir')
		
		let wW = window.innerWidth
		// if(wW>769){//pc에서만 움직임 적용
		// 	//랜덤한 뱡향 움직임 효과
		// }
		
    setInterval( positionRandom,800)
		for(const item of cir){
			item.addEventListener('click',cirRemoveEffect)
		}

		function positionRandom(){
			for(let i=0;i<cir.length;i++){
				gsap.to(cir[i],{
							 y: gsap.utils.random(-15, 15),
							 x: gsap.utils.random(-20, 30),
							duration: gsap.utils.random(1,2),
							ease: 'Power0.easeOut',onComplete:()=>{isMoving=false}
				})
      }
		}

		function cirRemoveEffect(){
			cirRemove(this)
		}
		function cirRemove(c){
			gsap.to(c,{transform:'scale(0)',duration:0.2})
		}
	})

});



