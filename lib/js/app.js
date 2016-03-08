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

        $('#items').html('');
        $('.results-container').slideUp();

        var searchFor = $('form input').val(),
            items,
            itemResults = '';

        $.each(response, function(key, value) {
            items = value.items;

            for (var i in items) {
                if (items[i].name.toLowerCase() == searchFor.toLowerCase()) {
                    itemResults += '<li>' + value.bundle + '</li>';
                    // itemResults += '<li><b>Quantity</b>: ' + items[i].quantity + '</li>';
                    // itemResults += '<li><b>Quality</b>: ' + items[i].quality + '</li>';
                    // itemResults += '<li><b>Description</b>: ' + items[i].description + '</li>';

                }
            }
        });
        $('form input').val('');
        if (itemResults !== '') {
            $('#items').html(itemResults);
            $('.results-container').slideDown();
        } else {
            itemResults += '<li>' + 'Item not found' + '</li>';
            $('#items').html(itemResults);
            $('.results-container').slideDown();
        }
    });
});
