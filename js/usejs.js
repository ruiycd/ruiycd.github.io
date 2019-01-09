//smoothscroll
      $(function(){
        // #で始まるリンクをクリックしたら実行
        $('a[href^="#"]').click(function()
        {
          // スクロールの速度
          var speed = 400; // ミリ秒で記述
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });
      });
      
//pagetop
$(function(){
  var topBtn=$('#pagetop');
  topBtn.hide();
 
  //ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>300){
      //---- 画面を300pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      //---- 画面が300pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    } 
  });
 
  //ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
});

//mainv fadein/out
    $(function() {
$('header').css('display', 'none').fadeIn(1500);
});
