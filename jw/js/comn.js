var d = 123;
function mod_at(){
    var date=document.lastModified;
    document.write(date);
}
function hello(){
    document.write("Hello js World!");
}

window.onload = function(){
    jQuery(document).ready(function($){
        $(document).ready(function(){
            /* insert jQuery code */
            //bxslider
            $('.bxslider').bxSlider({
                auto: true,
                pause: 5000,
                speed: 800,
                autoControls: true
            });
            //description animation
            $('.list-box > li').hover(function(){
                $(".description", this).stop().animate(
                    {bottom:'0px'},
                    {queue:false,duration:160});},
                    function() {
                        $(".description", this).stop().animate(
                            {bottom:'-'+d+'px'},
                            {queue:false,duration:160}
                        );
            });
            
            //ボタン[id:page-top]を出現させるスクロールイベント
            $(window).scroll(function(){
                var now = $(window).scrollTop();
                var under = $('body').height() - (now + $(window).height());
                if(now > 50){
                    $('#page-top').fadeIn('slow');
                }else{
                    $('#page-top').fadeOut('slow');
                }
            });
            //ボタン(id:move-page-top)のクリックイベント
            $('#move-page-top').click(function(){
                $('html,body').animate({scrollTop:0},'fast');
            });            $('#move-page-footer').click(function(){
                $('html,body').animate({scrollTop:$('body').height()},'fast');
            });
            
        });//document ready end
    });//jquery ready end
};//onload end