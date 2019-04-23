"use strict";

function PetFinderController(PetFinderService) {  
    const ctrl = this;
    PetFinderService.getData();



    ctrl.genderArray = [null, "male", "female"];
    //data.animals[n].gender
    ctrl.animalArray = [null, "dog", "cat"];
    //data.animals[n].type
    ctrl.ageArray = [null, "baby", "young", "adult"]
    // data.animals[n].age
    ctrl.house_trainedArray = [false, true];
    //data.animals[n].attributes.house_trained
    ctrl.shots_currentArray = [false, true];
    //data.animals[n].attributes.shots_current
    ctrl.spayed_neuteredArray = [false, true];
    //data.animals[n].attributes.spayed_neutered
    ctrl.special_needsArray = [false, true];
    //data.animals[n].attributes.special_needs
    ctrl.coatArray = [null, "short","medium", "long", "curly", "wire"];
    //data.animals[n].coat
    ctrl.sizeArray = [null, "small", "medium", "large"];
    //data.animals[n].size

    // link: data.animals[n].url
    // name: data.animals[n].name
    



}

angular
  .module("PetFinderApp")
  .controller("PetFinderController", ["PetFinderService", PetFinderController]);