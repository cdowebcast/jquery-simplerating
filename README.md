SimpleRating
=============

A simple JS file (using jQuery) to integrate a rating system with images to your website.
When the user click on a rank, the rank is stored into a hidden input of your choice, easily useable by your server side's script.
The click can also trigger a function of your choice, such as sending via AJAX the rank chosen to a server's side script. 

Demo
----
Test it here :
http://www.charlymartins.fr/demo/jquery-simplerating

Setup
-----
Download the JS file then add it to your page
```html
<script src="/assets/js/simplerating.js"></script>
```
Load jQuery if it's not already done

Add to your CSS :
````css
.low-opacity {
    opacity: 0.4;
}
.img-rate:hover {
    cursor:pointer;
}
```

Create an empty div in your page, where you want to display the rating system
````html
 <div id="rating-difficulty"></div>
 ```
An input hidden is automatically created to store the rank chosen by the user, don't forget the "autocomplete" attribute to avoid problem with Firefox,
you provide the name of this input in the settings.
 


Usage
-------
Into a script tag and when the document is loaded and ready
````javascript
 $('#rating-difficulty').simplerating({
             rating_number: 5, // RANK MAX GIVEN BY THE USER
             image: '/images/star.png', // IMAGE USED FOR THE RANK SYSTEM
             hidden_input: 'rank_simplerating', // THE ID OF YOUR HIDDEN INPUT CONTAINING THE USER'S CHOICE
             image_width: '32px', // OPTIONNAL, IF YOU NEED TO RESIZE THE IMAGE
             initial_rank: 1, // OPTIONNAL, INITIAL RANK
             callback_on_click: 'sendRate' // OPTIONNAL, NAME OF THE FUNCTION WITHOUT () CALLED WHEN THE USER CLICK ON A RANK
			 rating_text: {1 : 'Worst', 2 : 'Poor', 3 : 'Not bad', 4 : 'Great', 5 : 'Awesome'}
        });
```
Don't forget to check the rank chosen (into the hidden input) on your server side's script

Copyright
------
You are free to use and modify this script.

