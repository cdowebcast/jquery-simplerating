


(function(jQuery) {
    jQuery.fn.simplerating = function(options) {
    var settings = { 
                        
                        rating_number: 3, // RANK MAX GIVEN BY THE USER
                        image: '', // IMAGE USED FOR THE RANK SYSTEM
                        hidden_input: '', // THE ID OF YOUR HIDDEN INPUT CONTAINING THE USER'S CHOICE
                        image_width: '', // OPTIONNAL, IF YOU NEED TO RESIZE THE IMAGE
                        initial_rate : 1, // OPTIONNAL, INITIAL RANK
                        callback_on_click: '' // OPTIONNAL, NAME OF THE FUNCTION WITHOUT () CALLED WHEN THE USER CLICK ON A RANK
                        

		};
                
    var unactive = false;
    
             
		if(options) { jQuery.extend(settings, options); };  
                 $('#'+settings.hidden_input).val(settings.initial_rate); // SET THE VALUE OF THE INITIAL RANK TO THE HIDDEN INPUT
                 
                 
          
                 
       if (settings.image == '' || settings.image == null)
     {

         console.error('Simplerating : You must provide an image url');
     }
     
      if (settings.rating == 0 || settings.image == null)
     {

         console.error('Simplerating : You must provide a rating number');
     }
     

      for (i = 1; i !== (settings.rating_number+1);i++) // PRINT THE RANK'S IMAGE
      {
          var append = '<img src="'+settings.image+'"  width="'+settings.image_width+'"style="margin-left:5px;" id="rate['+i+']" data="'+i+'" class="img-rate';
          if (i >= (settings.initial_rate+1)) // FOR THE INTIAL VALUE
          {
              append += ' low-opacity';
          }
          append += '"/>';
           $(this).append(append);
      }
       
       
      
       $('.img-rate').hover( function(event) { // WHEN USER HOVER A RANK
           if (!unactive)
           {
          for (i = 1; i !== (parseInt($(this).attr('data')) +1);i++)
           {
           $('#rate\\['+i+'\\]').removeClass('low-opacity'); // HIGHLIGHT THE RANK
            }
       }
   });
       
       
        $('.img-rate').mouseleave( function(event) { // WHEN USER'S MOUSE LEAVE THE RANK SYSTEM
            if (!unactive)
            {
            var value = $('#'+settings.hidden_input).val();
            
            if (value === null)
            {
                value = 0;
            }
           
            var rating_number = settings.rating_number;
          for (i = 1; i !== (rating_number+1);i++)
           {
                if ($('#rate\\['+i+'\\]').attr('data') >  value) 
                {
                     $('#rate\\['+i+'\\]').addClass('low-opacity'); 
                 }
       }
        
        
            }  
    });
    
     $('.img-rate').click( function() {
         if (!unactive)
         {
         for (i = 1; i !== (parseInt($(this).attr('data')) +1);i++)
           {
           $('#rate\\['+i+'\\]').removeClass('low-opacity');
       }
     $('#'+settings.hidden_input).val($(this).attr('data'));
     
     if (settings.callback_on_click !== '') // IF A CALLBACK IS NEEDED
     {
        eval(settings.callback_on_click+'()');
         unactive = true; // THE USER CAN'T CHOOSE AN ANOTHER RANK
     }
        }
    });
        
        
        
    
    
    
    
    };
    
    
})(jQuery);

