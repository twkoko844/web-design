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
                            {bottom:'-80px'},                       //LI要素-80PXで止める
                            {queue:false,duration:160}              //キュー無効, アニメーション早さ0.16s
                        );
            });
        });
    });//jquery ready end
};//onload end