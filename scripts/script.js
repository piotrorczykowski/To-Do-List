$(document).ready(function()
{
    $('#clear-items').click(function()
    {
        $('.item').remove();
    });
 
    $('#items').on('click', '.fa-check-circle', function()
    {
        if($(this).closest('.item').find('.item-name').css('color') == 'rgb(207, 200, 200)')
        {
            $(this).closest('.item').find('.item-name').css({'text-decoration': 'none', 'color': '#404040'});
        }
        else
        {
            $(this).closest('.item').find('.item-name').css({'text-decoration': 'line-through', 'color': '#cfc8c8'});
        }
    });

    $('#items').on('click', '.fa-times-circle', function()
    {
        $(this).closest('.item').remove();
    });

    
    function addItem()
    {
        let start = '<div class="item">\n   <input type="text" name="item-name" value="';
        let end ='" class="item-name" disabled>\n<div class="icons">\n    <i class="fas fa-check-circle"></i>\n   <i class="fas fa-edit"></i>\n   <i class="fas fa-times-circle"></i>\n</div>'

        let item = start + $('#new-item').val() + end;
        $('#items').append(item);
        $('#new-item').val('');
    }

    $('#add-button').on('click', function()
    {
        if($('#new-item').val() != '')
        {
            addItem();
        }
    });

    $('#new-item').keypress(function()
    {
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13' && $('#new-item').val() != '')
        {
            addItem();
        }
    });


    $('#items').on('click', '.fa-edit', function()
    {
        $(this).closest('.item').find('.item-name').prop('disabled',false);
        let value = $(this).closest('.item').find('.item-name').val();
        $(this).closest('.item').find('.item-name').val('');
        $(this).closest('.item').find('.item-name').focus();
        $(this).closest('.item').find('.item-name').val(value);
    });

    $('#items').on('keypress', '.item-name', function()
    {
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13')
        {
            $(this).closest('.item').find('.item-name').prop("disabled", true);
        }
    });
})