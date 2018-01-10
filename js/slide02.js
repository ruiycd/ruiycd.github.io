// DOMを読み込んだら
$(function(){

    // カウンター変数
    var slideCount = 0;

    //写真を全部消して、１番目をフェードイン
    $('#slideshow').find('li:eq(0)').appendTo('#slideshow').addClass('fade-in');


    // スライドショー関数
    function slideShow(){

        // カウントを１ずつ増やす
        slideCount++;

        $('#slideshow').find('li:eq(0)').css('opacity',0).appendTo('#slideshow').addClass('fade-in');

        if(slideCount > 3){
            slideCount = 0;
        }
        console.log(slideCount);

        $('#circle li').removeClass('select');
        $('#circle li').eq(slideCount).addClass('select');
    }


    // 繰り返しの命令
    var updateCount = 0;
    function updateScreen(time){
        updateCount++;

        if (updateCount % 200 === 0) {
            slideShow();
        }
        window.requestAnimationFrame(updateScreen);
    }
    updateScreen();

});
