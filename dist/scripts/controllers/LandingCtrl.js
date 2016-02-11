(function() {
  function LandingCtrl($firebaseArray){
    var ref = new Firebase("https://glaring-torch-8862.firebaseio.com/data");

    var fbarray = $firebaseArray(ref);

    this.addTask = function(){
      fbarray.$add({
        name: this.taskValue,
        timestamp: Firebase.ServerValue.TIMESTAMP,
        priority: this.priority
      })
    }

    this.taskList = fbarray

    this.saveTask = function(task){
      fbarray.$save(task);
    };

    this.expiredTask = function() {
      for (var i = 0; i < this.taskList.length; i++) {
        var interval = new Date() - new Date(this.taskList[i].timestamp); 
        if (interval > 2) {
          this.taskList[i].expired = true;
        }
      };
    };

  }

  angular
    .module('blocitoff')
    .controller('LandingCtrl', LandingCtrl);
})();