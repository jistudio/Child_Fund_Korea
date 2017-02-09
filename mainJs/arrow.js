// JavaScript Document

   $(document).ready(function () {
	     //var timeonoff;  // 타이머

		 
	 $('.leftBtn').click(function () {
	     //clearInterval(timeonoff );	
             $('.withCompany ul').first().appendTo('.withCompany .gallery_box_container');
         });


         $('.RightBtn').click(function () {
	    // clearInterval(timeonoff );	
             $('.withCompany ul').last().prependTo('.withCompany .gallery_box_container');  //prependTo 가장 위로 보낸다
         });
	  
		// timeonoff =  setInterval(function () { 
			 
				 //  $('.withCompany ul').first().appendTo('.withCompany .gallery_box_container'); // 첫번째 ul 의 첫번째 ul (appendTo 가장 밑으로)
			   
         //   }, 2000);
	  
   });//