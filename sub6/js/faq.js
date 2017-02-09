// JavaScript Document

 $(document).ready(function () {
	var article = $('.faq .article');  //모든 질문과 답변을 article 이라 하겠다.!
	article.find('.a').slideUp(100);  //처음시작하자마자 닫고 출발하겠다!
	
	$('.faq .article .trigger').click(function(){     //각각의 질문을 클릭하면 
	var myArticle = $(this).parents('.article');    //클릭한 해당 li를 myarticle 이라 부르겠다!
	
	if(myArticle.hasClass('hide')){     //클릭한 li의 클래스가 hide 입니까?
	    article.find('.a').slideUp(100);  //열려있는 모든 답변을 닫아라!
		article.removeClass('show').addClass('hide');  //hide를 show 상태로 바꾼다.
	    myArticle.removeClass('hide').addClass('show');  
	    myArticle.find('.a').slideDown(100);   //답변을 열어라
	 } else {  //답변이 열려있는 상태에서 클릭했냐 
	   myArticle.removeClass('show').addClass('hide');   //hide 상태로 바꾼다. 
	   myArticle.find('.a').slideUp(100);  // 답변을 닫아라 
	}  
  });    
	
	$('.all').toggle(function(){  //모두 여닫기를 클릭하면 (홀수번째)
	    article.find('.a').slideDown(100); //모든 답변을 열어라 
	    article.removeClass('hide').addClass('show'); // show 상태로 만들어라 
		$(this).text('모두닫기▲')
	},function(){ 
	    article.find('.a').slideUp(100); //(짝수번째)
	    article.removeClass('show').addClass('hide'); //hide상태로 만들어라 
		$(this).text('모두열기▼')
	});
	
});  