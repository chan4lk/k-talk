    import { Component } from '@angular/core';
    import { LoggerService } from './Logger';

    import { Pet } from './Pet';
    import { SPDataService } from './SPDataService';
    import { PetComponent } from './app.component';

    @Component({
        selector:'pet-app',
        templateUrl:'app/container.html',
        directives:[PetComponent],
        providers:[LoggerService, SPDataService]
    })
    export class ContainerComponent {
        pets:Array<Pet>;
        constructor(private $log:LoggerService,
            private spDataService:SPDataService) {
           this.pets = this.spDataService.getAllPets();
        }
    }
   