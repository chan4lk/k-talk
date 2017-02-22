import { Component, Input } from '@angular/core';
import { Pet } from './Pet';
@Component({
    selector:'my-pet',
    templateUrl: 'app/pet.html'    
})
export class PetComponent{
    @Input()
    pet:Pet
}