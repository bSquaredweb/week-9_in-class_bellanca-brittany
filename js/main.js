$(document).ready(function(){
    var largestHeader = $('h1');
    largestHeader.css({
        'font-size': '100px',
        'color': 'green',
        'margin-bottom': '145px'
    });

    $('h2').addClass('second-header');

    // $('h1').append(' This is appended.');

    // $('h1').prepend('This is prepended. ');

    $('h1').after('This is after.');

    $('h1').before('This is before.');

});

$(function() {
    $('p').removeClass('new-class');

    $('h1').on('click', function(e) {
        // $(this).removeClass('second-header');
        $(this).slideUp(10000);
    });
});


// code not working

// $(document).ready(function(){
//   var listItem = $('li');
//   // listItem.css({
//   //   'padding': '50px',
//   //   'margin-bottom': '50px'
//   // });
//
//   listItem.on('click', function(e) {
//     // $('li span').remove();
//     var date = new Date();
//     date.setTime(e.timeStamp);
//     var clicked = date.toDateString();
//     $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>')
//   });
// });
