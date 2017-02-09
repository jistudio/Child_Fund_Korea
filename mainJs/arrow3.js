// JavaScript Document

   $(document).ready(function () {
	     //var timeonoff;  // 타이머

		 
	 $('.leftBtn3').click(function () {
	     //clearInterval(timeonoff );	
             $('.mainTopic ul').first().appendTo('.mainTopic .gallery_box_container3');
         });


         $('.rightBtn3').click(function () {
	    // clearInterval(timeonoff );	
             $('.mainTopic ul').last().prependTo('.mainTopic .gallery_box_container3');  //prependTo 가장 위로 보낸다
         });
	  
		// timeonoff =  setInterval(function () { 
			 
				 //  $('.withCompany ul').first().appendTo('.withCompany .gallery_box_container'); // 첫번째 ul 의 첫번째 ul (appendTo 가장 밑으로)
			   
         //   }, 2000);
	  
   });//