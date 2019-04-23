"use strict";

angular
  .module("PetFinderApp")
  .component("petDisplay", {
      template:`
    <ul id="pet-list">
      <li class="list-item" ng-repeat="pet in $ctrl.petList">

      </li>
    </ul> 
      `,
      controller: PetFinderController,
      bindings: {

      }
  });