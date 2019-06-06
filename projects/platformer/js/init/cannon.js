(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary (at least 3) to make your level challenging. 
     *
     * The following functions are available to you:
     *  cannon.create.onTop(xLocation);
     *  cannon.create.onBottom(xLocation);
     *  cannon.create.onLeft(yLocation);
     *  cannon.create.onRight(yLocation);
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        cannon.create.onTop(200, 2000);
        cannon.create.onTop(300, 1000);
        cannon.create.onTop(400, 2000);
        cannon.create.onTop(500, 1000);
        cannon.create.onTop(600, 2000);
        cannon.create.onTop(700, 1000);
        cannon.create.onTop(800, 2000);
        
        cannon.create.onTop(150, 2000);
        cannon.create.onTop(250, 1000);
        cannon.create.onTop(350, 2000);
        cannon.create.onTop(450, 1000);
        cannon.create.onTop(550, 2000);
        cannon.create.onTop(650, 1000);
        cannon.create.onTop(750, 2000);
         
        cannon.create.onTop(200, 2500);
        cannon.create.onTop(300, 1500);
        cannon.create.onTop(400, 2500);
        cannon.create.onTop(500, 1500);
        cannon.create.onTop(600, 2500);
        cannon.create.onTop(700, 1500);
        cannon.create.onTop(800, 2500);
        
        cannon.create.onTop(150, 2500);
        cannon.create.onTop(250, 1500);
        cannon.create.onTop(350, 2500);
        cannon.create.onTop(450, 1500);
        cannon.create.onTop(550, 2500);
        cannon.create.onTop(650, 1500);
        cannon.create.onTop(750, 2500);
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);
