
angular.module("dmApp")

.factory("$stat", ["$firebase","$all","$filter", myStat])


function myStat($firebase, $all, $filter){

  var ref = new Firebase('https://wilddm.firebaseio.com/');
  var sync = $firebase(ref);

  var now = new Date().getTime();

  return {
      data: sync,
      add: function(name) {
        var d = new Date();
        var timeStamp = d.getTime();
        var obj = {
          timeStamp : timeStamp,
          name : name,
          pt: $all.get(name).pt
        }

        sync.$push(obj);
      },
  }
}

