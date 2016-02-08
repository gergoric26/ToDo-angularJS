(function() {
  function TaskManager($firebaseArray){
    var ref = new Firebase("https://glaring-torch-8862.firebaseio.com/data");

    var fbarray = $firebaseArray(ref);

    fbarray.$add({taxt: 'test'})
  }

  angular
    .module(blocitoff)
    .controller('TaskManager', TaskManager)

})();