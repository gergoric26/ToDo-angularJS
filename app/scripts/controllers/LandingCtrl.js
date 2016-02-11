(function() {
  function LandingCtrl($firebaseArray){
    var ref = new Firebase("https://glaring-torch-8862.firebaseio.com/data");

    var fbarray = $firebaseArray(ref);

    this.addTask = function(){
      fbarray.$add({
        name: this.taskValue,
        createAt: Firebase.ServerValue.TIMESTAMP,
        priority: this.priority
      })
    }

    this.taskList = fbarray

    this.saveTask = function(task){
      fbarray.$save(task);
    };

    this.expiredTask = function(task) {
      //var experation = task.timestamp.createAt + (7 * 24 * 60 * 60 * 1000)
      var experation = task.createAt + (3 * 1000)
      if (Date.now() > experation) {
        return true
      }
      return false
    };
  };


  angular
    .module('blocitoff')
    .controller('LandingCtrl', LandingCtrl);
})();