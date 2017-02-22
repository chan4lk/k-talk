var PetApp;
(function (PetApp) {
    /**
     * SPDataService
     */
    var SPDataService = (function () {
        function SPDataService() {
        }
        /**
         * Get All Pets
         * @return All Pets
         */
        SPDataService.prototype.getAllPets = function () {
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
        };
        return SPDataService;
    }());
    angular
        .module('petApp')
        .service('spDataSvc', SPDataService);
})(PetApp || (PetApp = {}));
