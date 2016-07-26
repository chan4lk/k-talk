import { Injectable } from '@angular/core';
import { Pet } from './Pet';
import { IDataService } from './IDataService';
    /**
     * SPDataService
     */
    @Injectable()
    export class SPDataService implements IDataService {
        constructor() {

        }
        /**
         * Get All Pets
         * @return All Pets
         */
        getAllPets(): Array<Pet> {
            return [
                {
                    name: 'Puppy',
                    picture: 'images/image.jpg',
                    age: 1,
                    isAvailable: true
                },
                 {
                    name: 'Puppy2',
                    picture: 'images/image.jpg',
                    age: 2,
                    isAvailable: true
                },
                 {
                    name: 'Puppy',
                    picture: 'images/image.jpg',
                    age: 2,
                    isAvailable: false
                },
                 {
                    name: 'Puppy5',
                    picture: 'images/image.jpg',
                    age: 5,
                    isAvailable: true
                },
                 {
                    name: 'Puppy3',
                    picture: 'images/image.jpg',
                    age: 3,
                    isAvailable: true
                },
            ];

        }
    }