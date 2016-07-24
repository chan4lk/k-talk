module PetApp {
    /**
     * SPDataService
     */
    class SPDataService implements IDataService {
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
                    age: 5,
                    isAvailable: true
                },
                 {
                    name: 'Puppy',
                    picture: 'images/image.jpg',
                    age: 5,
                    isAvailable: true
                },
                 {
                    name: 'Puppy',
                    picture: 'images/image.jpg',
                    age: 5,
                    isAvailable: true
                },
                 {
                    name: 'Puppy',
                    picture: 'images/image.jpg',
                    age: 5,
                    isAvailable: true
                },
                 {
                    name: 'Puppy',
                    picture: 'images/image.jpg',
                    age: 5,
                    isAvailable: true
                },
            ];

        }
    }

    angular
    .module('petApp')
    .service('spDataSvc', SPDataService);
}