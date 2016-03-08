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
                if (items[i].name == searchFor) {
                    itemResults += '<li>' + value.bundle + '</li>';
                        console.log('Match!', value.bundle);
                } else {
                    console.log('Item not found.');
                }
            }
        });

        if (itemResults !== '') {
            $('#items').html(itemResults);
            $('.results-container').slideDown();
        }
    });
});
