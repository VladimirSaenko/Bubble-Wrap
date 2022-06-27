
"use strict";

$('.bubble').on('click', function() {
    $(this).toggleClass('active');
});

$('.sheetbutton').on('click', function() {
    $('.bubble').removeClass('active');
})
