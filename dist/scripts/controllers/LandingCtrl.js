(function() {
  function LandingCtrl($firebaseArray){
    var ref = new Firebase("https://glaring-torch-8862.firebaseio.com/data");

    var fbarray = $firebaseArray(ref);

    this.addTask = function(){
      fbarray.$add({name: this.taskValue})
    }

    this.taskList = fbarray

  }

  angular
    .module('blocitoff')
    .controller('LandingCtrl', LandingCtrl);
})();