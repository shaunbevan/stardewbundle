$(document).ready(function () {
  var response;
  var list = [];

  var json = $.getJSON('items.json', function() {
    console.log('Get JSON complete');
    response = json.responseJSON;
  });

  $('#search').click(function(){
    var text = document.getElementById('item').value;
    console.log("text: " + text);
    $.each(response, function(key, val) {
      var items = val.items;
      for (var i in items){
        list.push(val.items[i].name);
      }
    });
    for (var i in list){
      console.log(text);
      if (list[i] == text){
        console.log('success');
        break;
      } else {
        console.log('Item not found');
      }
    }
  });
});
