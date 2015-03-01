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
                //最上部から現在位置までの距離を取得して、変数[now]に格納
                var now = $(window).scrollTop();
                //最下部から現在位置までの距離を計算して、変数[under]に格納
                var under = $('body').height() - (now + $(window).height());
                //最上部から現在位置までの距離(now)が50以上かつ//最下部から現在位置までの距離(under)が0px以上だったら
                if(now > 50){
                    //[#page-top]をゆっくりフェードインする
                    $('#page-top').fadeIn('slow');
                    //それ以外だったらフェードアウトする
                }else{
                    $('#page-top').fadeOut('slow');
                }
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
            
        });//document ready end
    });//jquery ready end
};//onload end