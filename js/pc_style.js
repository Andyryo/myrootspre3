$(function() {
 // ��Uhide()�ŉB���ăt�F�[�h�C��������
    $('#next')
    .hide()
    .fadeIn('very slow');
});
                
//���S��������X���C�h�C�� 
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
    
