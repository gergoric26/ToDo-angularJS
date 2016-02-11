(function() {
  function ArchiveCtrl($firebaseArray){
    var ref = new Firebase("https://glaring-torch-8862.firebaseio.com/data");

    var fbarray = $firebaseArray(ref);

    this.taskList = fbarray


    this.expiredTask = function(task) {
      //var experation = task.timestamp.createAt + (7 * 24 * 60 * 60 * 1000)
      var experation = task.createAt + (3 * 1000)
      if (Date.now() > experation) {
        return true
      }
      return false
    };
  }

  angular
    .module('blocitoff')
    .controller('ArchiveCtrl', ArchiveCtrl);
})();