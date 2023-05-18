$(document).ready(function (){
    $('div.mason-parent').each(function(){
        // Determine mason-child width
        var mChildCount = $(this).children().length;
        var mChildRepeat = "repeat(" + mChildCount + ", 1fr)";
    $(this).css({ "display": "grid", "grid-template-columns": mChildRepeat });
    $('.mason-obj').css({ "max-width": "100%" });

    // Placing objects into mason-child
    var mHolderObjCount = $(this).parent().find('div.mason-holder').children().length;
    
    let i = 1;
    let j = 1;
    let jj = mChildCount;
    let jjj = 2;
    do {
        if (j == 0) {
            j = mChildCount;
        }

        if (jj == 0) {
            jj = mChildCount;
        }

        if (jjj == 0) {
            jjj = mChildCount;  
        }

        // Check mason-child height
        if ($(this).children('.mason-child:nth-child('+ j +')').height() > $(this).children('.mason-child:nth-child('+ jj +')').height()) {
            $(this).parent().find('div.mason-holder').children('.mason-obj:nth-child(1)').css({ "display": "inherit" }).appendTo($(this).children('.mason-child:nth-child('+ jjj +')'));
            j = (j + 1) % mChildCount;
            jj = (jj + 1) % mChildCount;
            jjj = (jjj + 1) % mChildCount;

        } else {
            $(this).parent().find('div.mason-holder').children('.mason-obj:nth-child(1)').css({ "display": "inherit" }).appendTo($(this).children('.mason-child:nth-child('+ j +')'));
            j = (j + 1) % mChildCount;
            jj = (jj + 1) % mChildCount;
            jjj = (jjj + 1) % mChildCount;
        }

        i = i + 1;
    } while (i <= mHolderObjCount);

    $(this).parent().find('.mason-holder').remove();

    });
});