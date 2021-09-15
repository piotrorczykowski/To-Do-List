$(document).ready(function()
{
    $('#clear-items').click(function()
    {
        $('.item').remove();
    });
 
    $('#items').on('click', '.fa-check-circle', function()
    {
        $(this).closest('.item').find('.item-name').css({'text-decoration': 'line-through', 'color': '#cfc8c8'});
    });

    $('#items').on('click', '.fa-times-circle', function()
    {
        $(this).closest('.item').remove();
    });

    let start = '<div class="item">\n<span class="item-name">'
    let end = '</span>\n<div class="icons">\n   <i class="fas fa-check-circle"></i>\n   <i class="fas fa-edit"></i>\n   <i class="fas fa-times-circle"></i>\n</div>'
    $('#add-button').on('click', function()
    {
        if($('#new-item').val() != '')
        {
            let item = start + $('#new-item').val() + end;
            $('#items').append(item);
        }
    });
})