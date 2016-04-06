$(document).ready(function() {
    current = "none";

    $("#first").mouseover(function() {
        if(current != "first"){
            current = "first";
            $('small').fadeOut(80, function() {
                $('small').text("Audi 951");
            });
            $('small').fadeIn(80);        
        }
    });
    

    $("#second").mouseover(function() {
        if(current != "second"){
            current = "second";
            $('small').fadeOut(80, function() {
                $('small').text("Audi 811");
            });
            $('small').fadeIn(80);        
        }
    });
    

    $("#third").mouseover(function() {
        if(current != "third"){
            current = "third";
            $('small').fadeOut(80, function() {
                $('small').text("Audi 154");
            });
            $('small').fadeIn(80);        
        }
    });
    

    $("#fourth").mouseover(function() {
        if(current != "fourth"){
            current = "fourth";
            $('small').fadeOut(80, function() {
                $('small').text("Audi 971");
            });
            $('small').fadeIn(80);        
        }
    });
    

    $("#fifth").mouseover(function() {
        if(current != "fifth"){
            current = "fifth";
            $('small').fadeOut(80, function() {
                $('small').text("Audi 361");
            });
            $('small').fadeIn(80);        
        }
    });

    $("#sixth").mouseover(function() {
        if(current != "sixth"){
            current = "sixth";
            $('small').fadeOut(80, function() {
                $('small').text("dank lambo");
            });
            $('small').fadeIn(80);        
        }
    });
});
