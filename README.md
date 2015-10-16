SimpleRating
=============

A simple JS file (using jQuery) to integrate a rating system with images to your website.
When the user click on a rank, the rank is stored into a hidden input of your choice, easily useable by your server side's script, the click can also trigger a function of your choice. 

Setup
-----
Download the JS file then add it to your page
```html
<script src="/assets/js/simplerating.js"></script>
```
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
 Create an input hidden to store the rank chosen by the user, don't forget the "autocomplete" attribute to avoid problem with Firefox
 
 ````html
 <input type="hidden" autocomplete="off" value="0" required="required" name="input_rating" id="input_rating">
````

Usage
-------
Into a script tag and when the document is loaded and ready
````javascript
 $('#rating-difficulty').simplerating({
             rating_number: 3, // RANK MAX GIVEN BY THE USER
             image: '/images/star.png', // IMAGE USED FOR THE RANK SYSTEM
             hidden_input: 'input_rating', // THE ID OF YOUR HIDDEN INPUT CONTAINING THE USER'S CHOICE
             image_width: '32px', // OPTIONNAL, IF YOU NEED TO RESIZE THE IMAGE
             initial_rank: 1, // OPTIONNAL, INITIAL RANK
             callback_on_click: 'sendRate' // OPTIONNAL, NAME OF THE FUNCTION WITHOUT () CALLED WHEN THE USER CLICK ON A RANK
        });
```
Don't forget to check the rank chosen on your server side's script

Copyright
------
You are free to use and modify this script.

