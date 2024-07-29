$(document).ready(function(){
    $('#animateBtn').click(function(){
        $('#box').animate({
            width: '200px',
            height: '200px',
            left: '50px',
            opacity: '0.5'
        }, 1000, function() {
            // Callback después de la animación
            $(this).animate({
                width: '100px',
                height: '100px',
                left: '0px',
                opacity: '1'
            }, 1000);
        });
    });
});
