(function() {
  function ArchiveCtrl($firebaseArray){
    var ref = new Firebase("https://glaring-torch-8862.firebaseio.com/data");

    var fbarray = $firebaseArray(ref);

    this.taskList = fbarray

  }

  angular
    .module('blocitoff')
    .controller('ArchiveCtrl', ArchiveCtrl);
})();