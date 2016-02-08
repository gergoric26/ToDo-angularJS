(function() {
  function LandingCtrl($firebaseArray){
    var ref = new Firebase("https://glaring-torch-8862.firebaseio.com/data");

    var fbarray = $firebaseArray(ref);

  }

  angular
    .module('blocitoff')
    .controller('LandingCtrl', LandingCtrl);
})();