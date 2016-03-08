$(document).ready(function () {
  var response;

  var json = $.getJSON('items.json', function() {
    console.log('Get JSON complete');
    response = json.responseJSON;
  });

  $('#search').click(function(){
    var text = document.getElementById('item').value;
    document.getElementById('item').value = '';
    console.log("text: " + text);
    $.each(response, function(key, val) {
      var items = val.items;
      for (var i in items){
        if (val.items[i].name == text){
          console.log('success');
        } else {
          console.log('Item not found.');
        }
      }
    });
  });
});
