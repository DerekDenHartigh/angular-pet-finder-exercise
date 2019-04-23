"use strict";

angular
  .module("PetFinderApp")
  .component("petDisplay", {
      template:`
    <ul id="pet-list">
      <li class="list-item" ng-repeat="pet in petList | filter: {{gender}} {{animalType}} {{age}} {{houseTrained}} {{shotsCurrent}} {{spayedNeutered}} {{specialNeeds}} {{coat}} {{size}}">
        <h1>{{pet.name}}</h1> <!--works-->
        <a href="{{pet.url}}><h1>{{pet.name}}</h1></a> <!--Doesn't work-->
      </li>
    </ul> 
      `,
      controller: PetFinderController
      // no need for bindings if only using 1 controller?
    //   bindings: {
    //     gender: "<",
    //     animalType: "<",
    //     age: "<",
    //     houseTrained: "<",
    //     shotsCurrent: "<",
    //     spayedNeutered: "<",
    //     specialNeeds: "<",
    //     coat: "<",
    //     size: "<"
    //   }
  });


  // working on filtering with modeled variables
//   | filter: 
//   {{gender}}
//   {{animalType}}
//   {{age}}
//   {{houseTrained}}
//   {{shotsCurrent}} 
//   {{spayedNeutered}}
//   {{specialNeeds}}
//   {{coat}}
//   {{size}}