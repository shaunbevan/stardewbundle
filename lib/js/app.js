$(function() {
    // set initial states of form until json has loaded
    $('body').hide();

    // collapse and hide results container until we have results
    $('.results-container').hide();

    // load json
    var response;
    var json = $.getJSON('items.json', function() {
        response = json.responseJSON;
        $('body').fadeIn();
    });

    // listen for form submission
    $('form').on('submit', function(e) {
        e.preventDefault();

        var searchFor = $('form input').val(),
            items,
            itemResults = '';

        $.each(response, function(key, value) {
            items = value.items;

            for (var i in items) {
                if (value.items[i].name != searchFor) {
                    console.log('Item not found.');
                    return false;
                }
                itemResults += $(value.items[i].name).wrap('<li></li>');
                $('#items').html(itemResults).slideDown();
            }
        });

        return false;
    });
});
