namespace PetApp {
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
                    name: 'Blob ',
                    picture: 'images/image.jpg',
                    age: 5,
                    isAvailable: true
                },
                {
                    name: 'Puppy2',
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