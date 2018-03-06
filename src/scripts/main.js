$('.recommended__item').hover(
    function() { $(this).addClass('recommended__item-activated') },
    function() { $(this).removeClass('recommended__item-activated') }
)

$(".header-menu__item").click(function() {
    $('.header-menu__item.header-menu__item-active').not(this).removeClass('header-menu__item-active');
    $(this).toggleClass('header-menu__item-active');
})

$(".product-options__item").click(function() {
    $('.product-options__item.product-options__item-selected').not(this).removeClass('product-options__item-selected');
    $(this).toggleClass('product-options__item-selected');
})

$("[data-fancybox]").fancybox({
    smallBtn: false
});

$(function() {
    $('.close').on('click', e => {
        e.preventDefault()
        $.fancybox.close()
    })
})

jQuery(document).ready(function() {
    $('.qtyplus').click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        if (!isNaN(currentVal)) {
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            $('input[name=' + fieldName + ']').val(0);
        }
    });

    $(".qtyminus").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            $('input[name=' + fieldName + ']').val(0);
        }
    });
});