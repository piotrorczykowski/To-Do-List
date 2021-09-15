$(document).ready(function()
{
    $('#clear-items').click(function()
    {
        $('.item').remove();
    });

    $('.fa-check-circle').click(function()
    {
        $(this).closest('.item').find('.item-name').css({'text-decoration': 'line-through', 'color': '#cfc8c8'});
    });
})