


     $(document).ready(function() {
             // $('ul.dropdownmenu li ul').hide();
             // $('.menu_box').hide();

            $('ul.dropdownmenu').hover(
                 function() { 
                    $('ul.dropdownmenu li.menu ul').fadeIn('slow',function(){$(this).stop();});
					 $('#header').animate({height:272},'normal').clearQueue();
					
                 },
                function() {
	    
	      $('ul.dropdownmenu li.menu ul').fadeOut('normal');
					 $('#header').animate({height:91},'normal').clearQueue();
					
               });
               






			   
	
			   
               $('ul.dropdownmenu li.menu').hover(
                 function() { 
	       $('a.depth1', this).animate({top:-30},'fast').clearQueue();
                 },
                function() {
	      $('a.depth1', this).animate({top:0},'fast').clearQueue();
               });
			   
			   
       //tab키 처리			   
			   
		   //tab 키 처리
			             $('ul.dropdownmenu li.menu .depth1').bind('focus', function () {        
                    $('ul.dropdownmenu li.menu ul').slideDown('fast');
										 $('#header').animate({height:272},'fast').clearQueue();

          });

         $('ul.dropdownmenu li.m6 li:last').find('a').bind('blur', function () {        
                  $('ul.dropdownmenu li.menu ul').slideUp('fast');
				  					 $('#header').animate({height:91},'fast').clearQueue();

         	});
          });

