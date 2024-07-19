$(function(){
    $('#login_popup').css({
       'display': 'flex' 
    });

    $('.item_figure').on('mouseenter',function(){
        var figId = $(this).attr('id');
        $('#'+figId).css({
            'transform': 'scale(1.15,1.15)'
        });
    });

    $('.item_figure').on('mouseleave',function(){
        var figId = $(this).attr('id');
        $('#'+figId).css({
            'transform': 'scale(1,1)'
        })
    });

});

function submitForm(){
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var password = document.getElementById('pass').value;
    
    $('#login_popup').css({
        'display': 'none' 
     });
 

}