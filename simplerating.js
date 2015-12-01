/******************************
jquery-simple rating
Author : Charly Martins
Version 1.1
https://github.com/Yosimitso/jquery-simplerating
*******************************/
(function(jQuery) {
    jQuery.fn.simplerating = function(options) {
    var settings = { 
                        
                        rating_number: 5, // RANK MAX GIVEN BY THE USER
                        rating_text : {},
                        image: '', // IMAGE USED FOR THE RANK SYSTEM
                        hidden_input: 'rank_simplerating', // THE ID AND NAME OF YOUR HIDDEN INPUT CONTAINING THE USER'S CHOICE
                        image_width: '', // OPTIONNAL, IF YOU NEED TO RESIZE THE IMAGE
                        initial_rate : 1, // OPTIONNAL, INITIAL RANK
                        callback_on_click: '' // OPTIONNAL, NAME OF THE FUNCTION WITHOUT () CALLED WHEN THE USER CLICK ON A RANK
                        
                        

		};
                
    var unactive = false;
    
             
		if(options) { jQuery.extend(settings, options); };  
                 $('#'+settings.hidden_input).val(settings.initial_rate); // SET THE VALUE OF THE INITIAL RANK TO THE HIDDEN INPUT
                 
                 
          /* TEST ON SETTINGS */
                 
       if (settings.image == '' || settings.image == null) // IMAGE PROVIDED
     {
         trigger_error(this,'Simplerating : You must provide an image url');
         return false;
     }
     
      if (settings.rating_number <= 0 || settings.rating_number == null)
     {

         
           trigger_error(this,'Simplerating : You must provide a rating number');
           return false;
     }
	 
	 if (settings.hidden_input)
	 {
		 if (jQuery('#'+settings.hidden_input).length == 0) // CREATING THE HIDDEN INPUT
		 {
			 jQuery(this).append('<input type="hidden" autocomplete="off" value="0" name="'+settings.hidden_input+'" id="'+settings.hidden_input+'">');
		 }
	 }
	 else
	 {
		 
                 trigger_error(this,'Simplerating : An hidden input is required to store the user\'s choice');
                  return false;
                 
	 }
         
        if (settings.rating_text) // IF PROVIDED IT MUST INCLUDE ALL THE RATING NUMBER 
        {
            for (test_text = settings.initial_rate; test_text <= settings.rating_number;test_text++ )
            {
                if (!settings.rating_text[test_text])
                {
                  
                  trigger_error(this,'SimpleRating : The parameter "rating_text" must contains all the rating number available or must be set to null/omitted');
                  return false;
                }      
            }
           
        }
        /* END TEST ON SETTINGS */
      for (i = 1; i !== (settings.rating_number+1);i++) // PRINT THE RANK'S IMAGE
      {
          var append = '<img src="'+settings.image+'"  width="'+settings.image_width+'" style="margin-left:5px;" id="rate_'+settings.hidden_input+'['+i+']" data="'+i+'" class="img-rate img-rate_'+settings.hidden_input;
          if (i >= (settings.initial_rate+1)) // FOR THE INTIAL VALUE
          {
              append += ' low-opacity';
          }
          append += '"/>';
         
           jQuery(this).append(append);
      }
      
      if (settings.rating_text)
      {
       number_text = '<div class="simplerating-text" id="simplerating-text">';
       if (settings.rating_text[parseInt(settings.initial_rate)])
       {
           number_text += settings.rating_text[parseInt(settings.initial_rate)];
       }
       number_text += '</div>';
       jQuery(this).append(number_text);
        }
       
      
       $('.img-rate_'+settings.hidden_input).hover( function(event) { // WHEN USER HOVER A RANK
           choice = parseInt($(this).attr('data'));
           if (!unactive)
           {
          for (i = 1; i <= choice;i++)
           {
           $('#rate_'+settings.hidden_input+'\\['+i+'\\]').removeClass('low-opacity'); // HIGHLIGHT THE RANK
            }
            //alert('i = '+(parseInt($(this).attr('data'))+1)+'; i < '+settings.rating_number+1+'; i++');
            for (i = choice+1; i <= settings.rating_number; i++) // FADE THE HIGHER RANK
            {
               $('#rate_'+settings.hidden_input+'\\['+i+'\\]').addClass('low-opacity'); 
            }
            if (settings.rating_text[parseInt($(this).attr('data'))])
            {
              $('#simplerating-text').html(settings.rating_text[parseInt($(this).attr('data'))]);  
            }
       }
   });
       
       
        $('.img-rate_'+settings.hidden_input).mouseleave( function(event) { // WHEN USER'S MOUSE LEAVE THE RANK SYSTEM
            if (!unactive)
            {
            var value = parseInt($('#'+settings.hidden_input).val());
            
            if (value === null || value === undefined)
            {
                value = settings.initial_rate;
            }
         
            var rating_number = settings.rating_number;
            
            
            
          for (i = value+1; i <= rating_number;i++)
           {
               
                $('#rate_'+settings.hidden_input+'\\['+i+'\\]').addClass('low-opacity'); 
                 
            }
                
          
            for (i = 1; i <= value; i++)
            {
                $('#rate_'+settings.hidden_input+'\\['+i+'\\]').removeClass('low-opacity'); 
            }
        
                if (settings.rating_text[$('#'+settings.hidden_input).val()]) // PRINT THE TEXT OF THE RANL
                {
                    
                    $('#simplerating-text').html(settings.rating_text[parseInt($('#'+settings.hidden_input).val())]);  
                }
                else
                {
                    $('#simplerating-text').html('');  
                }
            }  
            
            
    });
    
     $('.img-rate_'+settings.hidden_input).click( function() {
         if (!unactive)
         {
         for (i = 1; i !== (parseInt($(this).attr('data')) +1);i++)
           {
           $('#rate_'+settings.hidden_input+'\\['+i+'\\]').removeClass('low-opacity');
       }
     $('#'+settings.hidden_input).val($(this).attr('data'));
     
     if (settings.callback_on_click !== '') // IF A CALLBACK IS NEEDED
     {
        eval(settings.callback_on_click+'()');
         unactive = true; // THE USER CAN'T CHOOSE AN ANOTHER RANK
     }
        }
    });
        
        
        
    function trigger_error(myself,message)
    {
      console.error(message);
      jQuery(myself).html('SimpleRating : error');  
    }
    
    
    
    };
    
    
})(jQuery);


