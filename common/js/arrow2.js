// JavaScript Document

   $(document).ready(function () {
	     //var timeonoff;  // 타이머

		 
	 $('.leftBtn2').click(function () {
	     //clearInterval(timeonoff );	
             $('.hotTopic ul').first().appendTo('.hotTopic .gallery_box_container2');
         });


         $('.rightBtn2').click(function () {
	    // clearInterval(timeonoff );	
             $('.hotTopic ul').last().prependTo('.hotTopic .gallery_box_container2');  //prependTo 가장 위로 보낸다
         });
	  
		// timeonoff =  setInterval(function () { 
			 
				 //  $('.withCompany ul').first().appendTo('.withCompany .gallery_box_container'); // 첫번째 ul 의 첫번째 ul (appendTo 가장 밑으로)
			   
         //   }, 2000);
	  
   });//