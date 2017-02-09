// JavaScript Document

$(document).ready(function(){
  var cnt=3; //tab 개수 ***
  $('.tabs .contlist:eq(0)').show(); //첫번재 탭 내용만 보여라
  $('.tabs .tab1').css('background','url(images/tab1on.jpg)');// 첫번째 탭메뉴 불켜!, 이미지 경로 주의
  
  $('.tabs .tab').each(function (index) {//각가의 탭메뉴를 클릭하면...
    $(this).click(function(){    
	  $(".tabs .contlist").hide(); //모든 컨텐츠를 안보이게한다.
	  $(".tabs .contlist:eq("+index+")").show(); //클릭한 해당 컨텐츠만 보인다
	  for(var i=1;i<=cnt;i++){ //모든 탭메뉴 불꺼 !!!
           $('.tab'+i).css('background','url(images/tab'+i+'.jpg)');//이미지 경로 주의
      }
      $(this).css('background','url(images/tab'+(index+1)+'on.jpg)'); //해당 클릭한 탭 메뉴만 붕켜!!! 이미지 경로 주의 
   });
  });
});



