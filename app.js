var bundles = new Firebase('https://stardew.firebaseio.com/')
  .startAt('corn')
  .endAt('corn')
  .once("value", function (snapshot) {
    console.log("Here's your item: " + snapshot.key());
  }, function (err) {
    console.log("Error");
  });

// bundles.on("value", function(snapshot) {
//   var data = snapshot.val();
//   var list = [];
//   for (var key in data){
//     if (data.hasOwnProperty(key)){
//       name = data[key];
//       console.log(name);
//     }
//     list.push(name);
//   }
//   var lis = '';
//   for (var i = 0; i < list.length; i++) {
//       lis += '<li data-key="' + list[i] + '">' + list[i] + '</li>';
//   };
//   console.log("list: " + lis);
//   document.getElementById('items').innerHTML = lis;
//
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });
//
// function refreshUI(list) {
//     var lis = '';
//     for (var i = 0; i < list.length; i++) {
//         lis += '<li data-key="' + list[i].key + '">' + list[i].name + '</li>';
//     };
//     document.getElementById('items').innerHTML = lis;
// };
