;(function(){
  'use strict';

  angular.module("ab", [])
    .controller('AbController', function(){
      var vm = this;
      vm.persons = [
      {
        firstName: 'Evan',
        lastName: 'Roane',
        address: '192.168.1.1',
        email: 'evan.roane@gmail.com',
        github: 'github.com/evanroane',
        twitter: '@roaneZone'
      }
    ];

    vm.addNewPerson = function(){
      vm.persons.push(vm.newPerson);
      vm.newPerson = _newPerson();
    };

    vm.removePerson = function(person){
      var index = vm.persons.indexOf(person);
      vm.persons.splice(index,1);
    };

    vm.newPerson = _newPerson();

    function _newPerson(){
      return {
        twitter: '@'
      }
    }
  });
}());
