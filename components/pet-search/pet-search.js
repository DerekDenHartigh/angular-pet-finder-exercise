"use strict";

angular
  .module("PetFinderApp")
  .component("petSearch", {
      template:`
        <h1>Find your Pet:</h1>

        <h2>Gender:</h2>
        <select ng-model="gender" ng-options="gender for gender in ctrl.genderArray"></select>

        <h2>Animal Type:</h2>
        <select ng-model="animalType" ng-options="animalType for animalType in ctrl.animalArray"></select>

        <h2>Age:</h2>
        <select ng-model="age" ng-options="age for age in ctrl.ageArray"></select>

        <h2>House Trained:</h2>
        <select ng-model="houseTrained" ng-options="house_trained for house_trained in ctrl.house_trainedArray"></select>

        <h2>Shots Current:</h2>
        <select ng-model="shotsCurrent" ng-options="shots_current for shots_current in ctrl.shots_currentArray"></select>

        <h2>Spayed/Neutered:</h2>
        <select ng-model="spayedNeutered" ng-options="spayed_neutered for spayed_neutered in ctrl.spayed_neuteredArray"></select>

        <h2>Special Needs:</h2>
        <select ng-model="specialNeeds" ng-options="special_needs for special_needs in ctrl.special_needsArray"></select>

        <h2>Coat:</h2>
        <select ng-model="coat" ng-options="coat for coat in ctrl.coatArray"></select>

        <h2>Size:</h2>
        <select ng-model="size" ng-options="size for size in ctrl.sizeArray"></select>
      `,
      controller: PetFinderController,
      bindings: {

      }
  });