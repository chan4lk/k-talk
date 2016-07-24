namespace PetApp {
    /**
     * SPDataService
     */
    class MockDataService implements IDataService {

        static $inject = ['$q'];

        /**
         * Creates a new instance of <see ref="MockDataService">
         */
        constructor(private $q: ng.IQService) {

        }

        /**
         * Get All Pets
         * @return All Pets
         */
        getAllPets(): ng.IPromise<Array<Pet>> {
            let defer = this.$q.defer();
            let pets = [
                {
                    name: 'Blob ',
                    picture: 'http://product-images.imshopping.com/nimblebuy/ruff-haus-1183142-2019922-regular.jpg',
                    age: 5,
                    isAvailable: true
                },
                {
                    name: 'Puppy2',
                    picture: 'http://product-images.imshopping.com/nimblebuy/ruff-haus-1183142-2019922-regular.jpg',
                    age: 5,
                    isAvailable: false
                },
                {
                    name: 'Puppy',
                    picture: 'http://product-images.imshopping.com/nimblebuy/ruff-haus-1183142-2019922-regular.jpg',
                    age: 5,
                    isAvailable: false
                },
                {
                    name: 'Puppy',
                    picture: 'http://product-images.imshopping.com/nimblebuy/ruff-haus-1183142-2019922-regular.jpg',
                    age: 5,
                    isAvailable: true
                },
                {
                    name: 'Puppy',
                    picture: 'http://product-images.imshopping.com/nimblebuy/ruff-haus-1183142-2019922-regular.jpg',
                    age: 5,
                    isAvailable: false
                },
            ];

            defer.resolve(pets);

            return defer.promise;
        }
    }

    angular
        .module('petApp')
        .service('fakeDataSvc', MockDataService);
}