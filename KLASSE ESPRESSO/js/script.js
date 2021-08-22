

new WOW().init();

jQuery('.drawer-icon').on('click' , function(e){//どういった動きをすのかを下に
  e.preventDefault();//aタグ等のブラウザの操作を無効化する？？

  // alert('haha');//alertで挙動の確認ができる
  jQuery('.drawer-icon').toggleClass('is-active');//toggleClass＝クラスがついてたらなくす、なかったらつける
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});














//bgスライダー
jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['img/bread4.jpeg','img/bread5.jpeg','img/bread6.jpeg','img/bread7.jpeg' ,'img/bread8.jpeg'], // 切り替える背景画像を指定
    });
});

