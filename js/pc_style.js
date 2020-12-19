$(function() {
 // 一旦hide()で隠してフェードインさせる
    $('#next')
    .hide()
    .fadeIn('very slow');
});
                
//ロゴを横からスライドイン 
$('#Rogo')
    .css({
        'left':'-250%'
    })
    .animate({
        'left':'75%'
    }, 1000)
    .animate({
        'top':'10%', 'left':'17%'
    }, 1000)
    .animate({
        'top':'25%', 'left':'5%'
    }, 500)
    .animate({
        'top':'50%', 'left':'17%'
    }, 500)
    .animate({
        'top':'25%'
    }, 500)
    
