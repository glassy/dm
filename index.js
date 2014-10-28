
angular.module("dmApp",["glassy2014",
                          "firebase","ngStorage"])

.controller("mainCtrl", ["$scope", "$sce",
                          "$all", "$pts","$stat",
                          "$interval",
                          "$localStorage", mainCtrl])
.filter("toHackFolder", toHackFolder)
.filter("to2014", to2014)
.filter("toDm", toDm)
.filter("toIcon", toIcon)
.filter("toPrefix", toPrefix)
.filter("showTime", showTime)
.filter("readyOnly", readyOnly)
.filter("countNum",countNum)
.filter("toURI", toURI);


function mainCtrl($scope, $sce,
                     $all, $pts, $stat,
                      $interval, $localStorage){

  $scope.Math = window.Math;
  $scope.pts = $pts;
  $scope.all = $all;
  // console.log($all);
  $scope.stat = $stat;
  $scope.statData1 = $stat.data.$asArray(); 


  $interval(function(){
      $scope.now = new Date().getTime();
  },1000);

  // console.log($scope.stat.data.$asArray());

  var myFriend = '張明麗';

  $localStorage.$default(
        { glassyDm : { 
            myFriend: myFriend
          }
        });

  $localStorage.glassyDm.myFriend = decodeURI(location.hash.replace("#", '')) || $localStorage.glassyDm.myFriend;

  console.log($localStorage);
  $scope.f = $all.get($localStorage.glassyDm.myFriend);


  $scope.bindHashAndLocalStorage = function(name){
    location.hash = "#" + name;
    $localStorage.glassyDm.myFriend = name;
  }



  $scope.doPrintAndStat = function(name) {   
    $scope.stat.add(name);
    window.print();
  }

  $scope.trust = function(html) {
    return $sce.trustAsHtml(html);
  }


  $("#avatar").draggable();
  $(".drag").draggable();

}






function toHackFolder ($pts){
  return function(pt){
    return $pts[pt].hackfoldr;
  }
}

function to2014 ($pts) {
  return function(pt){
    return $pts[pt].toThis || $pts[pt].hackfoldr ;
  }
}

function toIcon ($pts) {
  return function(pt) {
    return $pts[pt].toIcon;
  }
}

function toPrefix ($pts) {
  return function(pt) {
    return $pts[pt].toPrefix;
  }
}

function toDm () {
	return function(name) {
		return 'https://glassy.github.io/dm#' + name;
	}
}

function showTime (){
  return function(n){
    var sec = Math.floor(n / 1000);
    var min = Math.floor(sec / 60);
    var hour = Math.floor(min / 60);
    var day = Math.floor(hour / 24);
    var week = Math.floor(day / 7);
    var month = Math.floor(week / 4.2);
    var year = Math.floor(month / 12);

    return  test([Math.floor(year),'年']) || 
            test([Math.floor(month),'月']) || 
            test([Math.floor(week),'週']) || 
            test([Math.floor(day),'天']) || 
            test([Math.floor(hour),'小時']) || 
            test([Math.floor(min),'分鐘']) || 
            test([Math.floor(sec),'秒']) || [0,'秒']
  }
}

function test(a) {
  return ((a[0] != 0) && a) || 0;
}


function readyOnly(){
  return function(list){
    return list.filter(function(o){ 
      return o.img && o.note && o.note.length > 50;
    })

  }
}

function countNum(){
  return function(list,name) {
    return list.filter(function(o){
      return o.name == name
    }).length + 1;
  }
}

function toURI(){
  return function(str) {
    return encodeURI(str);
  }
}