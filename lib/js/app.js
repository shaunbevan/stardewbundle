var bundles = new Firebase('https://stardew.firebaseio.com/')
  .startAt('corn')
  .endAt('corn')
  .once("value", function (snapshot) {
    console.log("Here's your item: " + snapshot.key());
  }, function (err) {
    console.log("Error");
  });
