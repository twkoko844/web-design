/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function mod_at(){
    var date = document.lastModified;
    document.write(date);
}
function hello(){
    document.write("Hello js World!");
}

$(document).ready(function(){
    /* insert jQuery code */

    //minheader status
    var before_minheader_status = 0;
    var now_minheader_status = 0;
    //loading
    var h = $(window).height();
    var dilaytime = 1000  //1000ms
    $('#loadbg').css('z-index','5001');  //test
    $('#wrap').css('display','none');
    $('#loadbg ,#loader').height(h).css('display','block');
    $('#loadbg').delay(dilaytime).fadeOut(1000);
    $('#loader').delay(dilaytime).fadeOut(500);
    $('#wrap').fadeIn();
    $(function(){
        setTimeout('stopload()',10000);
    });
    function stopload(){
        $('#wrap, .bx-prev, .bx-next').css('display','block');
        $('#loadbg').delay(dilaytime).fadeOut(1000);
        $('#loader').delay(dilaytime).fadeOut(500);
    }
});//document ready end

window.onload = function(){
    //bxslider
    $('.bxslider').bxSlider({
        auto: true,
        pause: 5000,
        speed: 800,
        autoControls: true
    });
    //description animation
    $('.list-box > li').hover(function(){   //id=list-boxの子要素のliを取得,hoverした時にfunction
        $(".description", this).stop().animate(     //class=descriptionのアニメーション
            {bottom:'0px'},                         //li要素のbottom 0pxで止める
            {queue:false,duration:160});},          //queue=他のアニメーションの終了を待たない duration=アニメーションの早さ0.16s
            function() {
                $(".description", this).stop().animate(     //hoverでないとき
                    {bottom:'-80px'},                       //li要素-80PXで止める
                    {queue:false,duration:160}              //キュー無効, アニメーション早さ0.16s
                );
    });
    //ボタン[id:page-top]を出現させるスクロールイベント
    $(window).scroll(function(){
        var scTop = $(window).scrollTop();
        if(scTop > 50){
            $('#page-top').fadeIn('slow');
        }else{
            $('#page-top').fadeOut('slow');
        }
        //minheader
        if(scTop > 100){
            now_minheader_status = 1;
        }else{
            now_minheader_status = 0;
        }
        if(before_minheader_status != now_minheader_status){
            if(now_minheader_status == 1){
                $('#minheader').stop().animate({top:"0px"},250);
            }else{
                $('#minheader').stop().animate({top:"-51px"},250);
            }
        }
                before_minheader_status = now_minheader_status;
    });
    //ボタン(id:move-page-top)のクリックイベント
    $('#move-page-top').click(function(){
        //ページトップへ移動する
        $('html,body').animate({scrollTop:0},'fast');
    });
    //footerへ移動
    $('#move-page-footer').click(function(){
        $('html,body').animate({scrollTop:$('body').height()},'fast');
    });
};//onload end