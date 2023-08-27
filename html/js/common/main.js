$(function(){

  // 교육과정 슬라이더 만들기
  $('#slider-curriculum').on('init', function(_event, slick){
    // init 초기화 이벤트
    // puase/play 이벤트
    let $appendDots = $(slick.options.appendDots);
    $appendDots.find('.play_btn > a').click(function(){
      let $me = $(this);
      if($me.hasClass('stop')){
          $me.removeClass('stop').addClass('play');
          slick.$slider.slick('slickPause'); // 슬라이더 중지
      } else {
          $me.removeClass('play').addClass('stop');
          slick.$slider.slick('slickPlay'); // 슬라이더 시작
      }
      return false;
    });

    // 마지막 슬라이더에 .slick-active-last 추가하기 (초기값)
    if(slick.slideCount > 0 && slick.options.slidesToShow > 0){
      slick.$slider.find('.slick-active').eq(slick.options.slidesToShow-1).addClass('slick-active-last');
    }
}).on('afterChange', function(_event, slick, _currentSlide, _nextSlide){
  // after 이벤트
  if(slick.slideCount > 0 && slick.options.slidesToShow > 0){
    let $me=$(this);
    // 마지막 슬라이더에 .slick-active-last 추가하기 (슬라이더 변동)
    $me.find('.slick-active-last').removeClass('slick-active-last');
    $me.find('.slick-active').eq(slick.options.slidesToShow-1).addClass('slick-active-last');
  }
}).slick({
    slide: 'div',		            // 슬라이드 되어야 할 태그 ex) div, li 
    infinite : true, 	          // 무한 반복 옵션	 
    slidesToShow : 4,		        // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,		      // 스크롤 한번에 움직일 컨텐츠 개수
    speed : 100,	              // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true, 		          // 옆으로 이동하는 화살표 표시 여부
    dots : true, 		            // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,			      // 자동 스크롤 사용 여부
    autoplaySpeed : 3000,       // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,	      // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,		        // 세로 방향 슬라이드 옵션
    prevArrow : "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
    nextArrow : "<button type='button' class='slick-next'>Next</button>",		  // 다음 화살표 모양 설정
    dotsClass : "slick-dots", 	// 아래 나오는 페이지네이션(점) css class 지정
    draggable : true, 	        // 드래그 가능 여부 
    appendDots : document.getElementById('slider_curric_dots'),  // dot 버튼 생길 위치
    responsive: [               // 반응형 웹 구현 옵션  
      {
        breakpoint: 960,        // 화면 사이즈
        settings: {
          slidesToShow:3        // 위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        }
      },
      { 
        breakpoint: 768,        // 화면 사이즈
        settings: {
          slidesToShow:2        // 위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        } 
      }
    ]
  });

  // 아카데미 슬라이더 만들기
  $('#slider-academy').on('init', function(_event, slick){
    // init 초기화 이벤트
    // puase/play 효과
    let $appendDots = $(slick.options.appendDots);
    $appendDots.find('.play_btn > a').click(function(){
      let $me = $(this);
      if($me.hasClass('stop')){
          $me.removeClass('stop').addClass('play');
          slick.$slider.slick('slickPause'); // 슬라이더 중지
      } else {
          $me.removeClass('play').addClass('stop');
          slick.$slider.slick('slickPlay'); // 슬라이더 시작
      }
      return false;
    });

    // 슬라이드 바로가기
    $('#edu_list > li > a').each(function(index){
      if(index == 0){
        // 초기값 (첫번째에 미리 포커스)
        $(this).parent().addClass('on');
      }
      $(this).click(function(){
        slick.slickGoTo(index); // 슬라이더 이동
        return false;
      });
    });
  }).on('beforeChange', function(_event, _slick, _currentSlide, nextSlide){
    // before 이벤트 (after 이벤트 보다 ui 전환이 매끄러워 보임)
    // 슬라이드 바로가기 포커스 ui 처리
    let $targets = $('#edu_list').children();
    $targets.removeClass('on');
    $targets.eq(nextSlide).addClass('on');
  }).slick({
    slide: 'div',		            // 슬라이드 되어야 할 태그 ex) div, li 
    infinite : true, 	          // 무한 반복 옵션	 
    slidesToShow : 1,		        // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,		      // 스크롤 한번에 움직일 컨텐츠 개수
    speed : 100,	              // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : false, 		        // 옆으로 이동하는 화살표 표시 여부
    dots : true, 		            // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,			      // 자동 스크롤 사용 여부
    autoplaySpeed : 3000, 		  // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,		    // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,		        // 세로 방향 슬라이드 옵션
    dotsClass : "slick-dots", 	// 아래 나오는 페이지네이션(점) css class 지정
    draggable : true, 	        // 드래그 가능 여부 
    appendDots : document.getElementById('slider_aca_dots'), // dot 버튼 생길 위치
    responsive: [               // 반응형 웹 구현 옵션
      {  
        breakpoint: 960,        // 화면 사이즈
        settings: {
          slidesToShow:3        // 위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        } 
      },
      { 
        breakpoint: 768,        // 화면 사이즈
        settings: {	
          slidesToShow:2        // 위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        } 
      }
    ]
  });

});