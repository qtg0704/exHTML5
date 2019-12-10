var menu = $('.menu');
var items = $('.menu-item');
var btns = $('.btn-menu');
var anchors = $('.sub-menu a');

// 토글 버튼을 클릭했을 때 하위 메뉴를 보이도록 설정할 것
btns.click(function(e){
  e.preventDefault(); // a 태그를 썻기 때문에 이벤트 발생 x(이벤트 취소) 버튼처럼 만들기 위해
  items.removeClass('menu-act')
  $(this).parent().addClass('menu-act');
});

anchors.addClass('icon-dot-circled'); //anchors 모든 태그에 아이콘 추가