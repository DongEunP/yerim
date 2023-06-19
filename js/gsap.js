

const sec1 = document.querySelector('.sec01');
const sec2 = document.querySelector('.sec02');


let wW = 1920
let viH = 1080




  // const ctype1 = document.createElement('div')//원 생성
  // ctype1.classList.add('bg-cir')//클래스 추가
  // gsap.set(ctype1,{ width:18, height: 18, border:'solid 1px #4d98f0',top:125/viH*100+'%',left:507/wW*100+'%'});//style 및 위치값

  // //원을 섹션에 맞게 추가
  // sec1.append(ctype1); 

const cir1 = document.createElement('div').classList.add('bg-cir')
cir1.gsap.set(ctype1,{ width:18, height: 18, border:'solid 1px #4d98f0',top:125/viH*100+'%',left:507/wW*100+'%'})