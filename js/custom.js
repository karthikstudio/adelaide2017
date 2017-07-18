
$( document ).ready(function() {
    $( ".mouseover-custom" ).mouseover(function() {
      $(this).find('h3, p, i').addClass('color-white');
      $(this).find('#color-block').addClass('bg-color-base');
    });

    $( ".mouseover-custom" ).mouseleave(function() {
        $(this).find('h3, p, i').removeClass('color-white');
        $(this).find('#color-block').removeClass('bg-color-base');
    });
});
