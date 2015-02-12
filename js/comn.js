/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function mod_at(){
    var date=document.lastModified;
    document.write(date);
}
function hello(){
    document.write("Hello World!");
}

window.onload = function(){
    jQuery(document).ready(function($){
        $(document).ready(function(){
            $('.bxslider').bxSlider({
                auto: true,
                pause: 5000,
                speed: 800,
                autoControls: true
            });
            $('.list-box > li').hover(function(){
                $(".description", this).stop().animate({bottom:'0px'},{queue:false,duration:160});}, function() {
                    $(".description", this).stop().animate({bottom:'-80px'},{queue:false,duration:160});
            });
        });
    });//jquery ready end
};//onload end