"use strict";

angular
  .module("PetFinderApp")
  .component("petSearch", {
      template:`
        <h1 id="search-header">Find your Pet:</h1>

        <div class="search-box"><h2 class="search-category">Gender:</h2>
        <select class="selection-box" ng-model="gender" ng-options="gender for gender in $ctrl.genderArray"></select></div>

        <div class="search-box"><h2 class="search-category">Animal Type:</h2>
        <select class="selection-box" ng-model="animalType" ng-options="animalType for animalType in $ctrl.animalArray"></select></div>

        <div class="search-box"><h2 class="search-category">Age:</h2>
        <select class="selection-box" ng-model="age" ng-options="age for age in $ctrl.ageArray"></select></div>

        <div class="search-box"><h2 class="search-category">House Trained:</h2>
        <select class="selection-box" ng-model="houseTrained" ng-options="house_trained for house_trained in $ctrl.house_trainedArray"></select></div>

        <div class="search-box"><h2 class="search-category">Shots Current:</h2>
        <select class="selection-box" ng-model="shotsCurrent" ng-options="shots_current for shots_current in $ctrl.shots_currentArray"></select></div>

        <div class="search-box"><h2 class="search-category">Spayed/Neutered:</h2>
        <select class="selection-box" ng-model="spayedNeutered" ng-options="spayed_neutered for spayed_neutered in $ctrl.spayed_neuteredArray"></select></div>

        <div class="search-box"><h2 class="search-category">Special Needs:</h2>
        <select class="selection-box" ng-model="specialNeeds" ng-options="special_needs for special_needs in $ctrl.special_needsArray"></select></div>

        <div class="search-box"><h2 class="search-category">Coat:</h2>
        <select class="selection-box" ng-model="coat" ng-options="coat for coat in $ctrl.coatArray"></select></div>

        <div class="search-box"><h2 class="search-category">Size:</h2>
        <select class="selection-box" ng-model="size" ng-options="size for size in $ctrl.sizeArray"></select></div>
      `,
      controller: PetFinderController
      // no need for bindings if there's only 1 controller?
    //   bindings: {
    //     gender: "=",
    //     animalType: "=",
    //     age: "=",
    //     houseTrained: "=",
    //     shotsCurrent: "=",
    //     spayedNeutered: "=",
    //     specialNeeds: "=",
    //     coat: "=",
    //     size: "="
    //   }
  });