$(function(){
    $(function(){
        $('#slider-curriculum').on('init', function(_event, slick){
          let tool_area = slick.$slider.attr('slick-tool-area');
          let closet_target='.'+tool_area;
          slick.$slider.closest(closet_target).find('.play_btn > a').click(function(){
            let $me = $(this);
            if($me.hasClass('stop')){
                $me.removeClass('stop').addClass('play');
                slick.$slider.slick('slickPause');
            } else {
                $me.removeClass('play').addClass('stop');
                slick.$slider.slick('slickPlay');
            }
            return false;
          });
          if(slick.slideCount > 0 && slick.options.slidesToShow > 0){
            slick.$slider.find('.slick-active').eq(slick.options.slidesToShow-1).addClass('slick-active-last');
          }
      }).slick({
          slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
          infinite : true, 	//무한 반복 옵션	 
          slidesToShow : 4,		// 한 화면에 보여질 컨텐츠 개수
          slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
          speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
          arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
          dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
          autoplay : true,			// 자동 스크롤 사용 여부
          autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
          pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
          vertical : false,		// 세로 방향 슬라이드 옵션
          prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
          nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
          dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
          draggable : true, 	//드래그 가능 여부 
          appendDots : document.getElementById('slider_curric_dots'),
          responsive: [ // 반응형 웹 구현 옵션
            {  
              breakpoint: 960, //화면 사이즈 960px
              settings: {
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:3 
              }    
            },
            { 
              breakpoint: 768, //화면 사이즈 768px
              settings: {	
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:2 
              } 
            }
          ]
        }).on('afterChange', function(_event, slick, _currentSlide, _nextSlide){
          if(slick.slideCount > 0 && slick.options.slidesToShow > 0){
            let $me=$(this);
            $me.find('.slick-active-last').removeClass('slick-active-last');
            $me.find('.slick-active').eq(slick.options.slidesToShow-1).addClass('slick-active-last');
          }
          
        });

        $('#slider-academy').on('init', function(_event, slick){
          slick.$slider.parent().find('.play_btn > a').click(function(){
            let $me = $(this);
            if($me.hasClass('stop')){
                $me.removeClass('stop').addClass('play');
                slick.$slider.slick('slickPause');
            } else {
                $me.removeClass('play').addClass('stop');
                slick.$slider.slick('slickPlay');
            }
            return false;
          });
          $('#edu_list > li > a').each(function(index){
            $(this).click(function(){
              slick.slickGoTo(index);
              return false;
            });
          });
        }).slick({
          slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
          infinite : true, 	//무한 반복 옵션	 
          slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
          slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
          speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
          arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
          dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
          autoplay : true,			// 자동 스크롤 사용 여부
          autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
          pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
          vertical : false,		// 세로 방향 슬라이드 옵션
          dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
          draggable : true, 	//드래그 가능 여부 
          appendDots : document.getElementById('slider_aca_dots'),
          responsive: [ // 반응형 웹 구현 옵션
            {  
              breakpoint: 960, //화면 사이즈 960px
              settings: {
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:3 
              } 
            },
            { 
              breakpoint: 768, //화면 사이즈 768px
              settings: {	
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:2 
              } 
            }
          ]
        }).on('beforeChange', function(_event, _slick, _currentSlide, nextSlide){
          let $targets = $('#edu_list').children();
          $targets.removeClass('on');
          $targets.eq(nextSlide).addClass('on');
        });
        

        // $('#slider-sample').slick({
        //   slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
        //   infinite : true, 	//무한 반복 옵션	 
        //   slidesToShow : 4,		// 한 화면에 보여질 컨텐츠 개수
        //   slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        //   speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        //   arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
        //   dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
        //   autoplay : true,			// 자동 스크롤 사용 여부
        //   autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        //   pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        //   vertical : false,		// 세로 방향 슬라이드 옵션
        //   prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
        //   nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
        //   dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
        //   draggable : true, 	//드래그 가능 여부 

        //   responsive: [ // 반응형 웹 구현 옵션
        //     {  
        //       breakpoint: 960, //화면 사이즈 960px
        //       settings: {
        //         //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        //         slidesToShow:3 
        //       } 
        //     },
        //     { 
        //       breakpoint: 768, //화면 사이즈 768px
        //       settings: {	
        //         //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        //         slidesToShow:2 
        //       } 
        //     }
        //   ]
        // }).on('afterChange', function(_event, _slick, currentSlide, _nextSlide){
        //   let x = '#edu_list nth-child(\'+'+currentSlide+'+\')';
        //   console.info(x);
        //   $(x).addClass('on');
        // });

    });

})

/* sample
$(function(){
    $('#slider-div').slick({
        slide: 'div',        //슬라이드 되어야 할 태그 ex) div, li 
        infinite : true,     //무한 반복 옵션     
        slidesToShow : 4,        // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
        speed : 100,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true,         // 옆으로 이동하는 화살표 표시 여부
        dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,            // 자동 스크롤 사용 여부
        autoplaySpeed : 10000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,        // 세로 방향 슬라이드 옵션
        prevArrow : "<button type='button' class='slick-prev'>Previous</button>",        // 이전 화살표 모양 설정
        nextArrow : "<button type='button' class='slick-next'>Next</button>",        // 다음 화살표 모양 설정
        dotsClass : "slick-dots",     //아래 나오는 페이지네이션(점) css class 지정
        draggable : true,     //드래그 가능 여부 
        
        responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:3 
                } 
            },
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {    
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:2 
                } 
            }
        ]

    });
})
*/