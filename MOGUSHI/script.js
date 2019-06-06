


$(function() {

	$("#spnav").on("click", function() {
		if ( document.body.className.indexOf("open") > -1 ) {
			//document.body.className = "";
			removeClass( document.body, "open" );
		}
		else {
			document.body.className += " open";
		}
	});



	function removeClass( elem, target ) {
		var classList = elem.className.split(" ");
		for ( var i = 0, cls = ""; i < classList.length; i++ ) if ( classList[i] === target ) classList.splice( i, 1 );
		for ( var i = 0, cls = ""; i < classList.length; i++ ) {
			if ( cls === "" ) cls = classList[i];
			else cls += " " + classList[i];
		}
		elem.className = cls;
	}

	
});


jQuery(function() {
    var nav = jQuery('#menu');

	var hfixsize = 100;
	
	//var hsize = $('#menu_wrap').height();
    // メニューのtop座標を取得する
    var offsetTop = hfixsize;

    var floatMenu = function() {
        // スクロール位置がメニューのtop座標を超えたら固定にする
        if (jQuery(window).scrollTop() > offsetTop) {
            nav.addClass('fixed');
		}else {
            nav.removeClass('fixed');
			$("#header_info").removeClass('fixed');
        }
    }
    jQuery(window).scroll(floatMenu);
    jQuery('body').bind('touchmove', floatMenu);
});


/*

$(document).ready(function () {
  hsize = $('.bxslider').height();
  $(".mh").css("height", hsize + "px");
  $('#slid').css("height", hsize + "px");
  $('.bxslider img').css("height", hsize + "px");
  $('.bxslider li').css("height", hsize + "px");
  $('.bx-wrapper').css("height", hsize + "px");
  $('.bx-viewport').css("height", hsize + "px");
});
$(window).resize(function () {
  hsize = $('.bxslider').height();
  $(".mh").css("height", hsize + "px");
  $('#slid').css("height", hsize + "px");
  $('.bxslider img').css("height", hsize + "px");
  $('.bxslider li').css("height", hsize + "px");
  $('.bx-wrapper').css("height", hsize + "px");
  $('.bx-viewport').css("height", hsize + "px");
});
*/


$(function() {
if ( navigator.userAgent.indexOf('iPad') > 0 ) {
    $("body").addClass("iPad");
};
});
$(function() {
if ( navigator.userAgent.indexOf('iPhone') > 0 ) {
    $("body").addClass("iPhone");
};
});

$(function(){
if ( navigator.userAgent.indexOf('Android') > 0 ) {
    $("body").addClass("Android");
};
});

$(function(){
if ( navigator.userAgent.indexOf('msie') > 0 ) {
    $("body").addClass("ie");
};
});

$(function(){
//ここから判定してクラス付与スクリプト
var ua, verArr, version, ieVer, ie, chrome, firefox, opera, safari;
ua = navigator.userAgent;
 
// IEかそれ以外かどうかを判定
if (ua.match(/msie/i) || ua.match(/trident/i)) {
    // IEの場合はバージョンを判定
    verArr = /(msie|rv:?)\s?([\d\.]+)/i.exec(ua);
    version = (verArr) ? verArr[2] : '';
    version = version.replace('.', '_');
    ieVer = "ie"+version;
 
    // "ie11_0"等を付与
    $("html").addClass('ie');
} else {
    if (ua.match(/chrome/i)) {
        // chrome
        $("html").addClass('chrome');
    } else if(ua.match(/firefox/i)) {
        // firefox
        $("html").addClass('firefox');
    } else if(ua.match(/opera/i)) {
        // opera
        $("html").addClass('opera');
    } else if(ua.match(/safari/i)) {
        // safari
        $("html").addClass('safari');
    }
}
  
//ここからOS判定
if (navigator.userAgent.indexOf('Win') > 0) {
    $('html').addClass('win');
} else if (navigator.userAgent.indexOf('Mac') > 0){
    $('html').addClass('mac');
} else if (navigator.userAgent.indexOf('iPhone') > 0){
    $('html').addClass('iphone');
} else if (navigator.userAgent.indexOf('iPad') > 0){
    $('html').addClass('ipad');
} else if (navigator.userAgent.indexOf('iPod') > 0){
    $('html').addClass('ipod');
} else if (navigator.userAgent.indexOf('Android') > 0){
    $('html').addClass('android');
} 

var hantei = $('html').attr('class');

//  $('.container').prepend('<p>今見ているブラウザとOSは<span style="color:#DB0D63;">'+ hantei +'</span>です<br><span style="color:#DB0D63;">htmlタグに' + hantei + 'というクラス名</span>が<br>ついてますので、そのブラウザだけ表示が違う時は、<br>このクラスをつかって、個別にスタイルを書いて解決出来ます！<br>これでクロスブラウザ対策が楽になるはず！</p>' );
   

});




<!-- スムーズスクロール部分の記述 -->
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});