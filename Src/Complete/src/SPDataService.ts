namespace PetApp {

    interface IPetResponse {
        data: {
            value: Array<Pet>;
        };
    }

    /**
     * SPDataService
     */
    class SPDataService implements IDataService {

        static $inject = ['$http', '$q'];

        /**
         * Creates a new instance of <see ref="SPDataService">
         */
        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

        }

        /**
         * Get All Pets
         * @return All Pets
         */
        getAllPets(): ng.IPromise<Array<Pet>> {
            let defer = this.$q.defer();
            let pets = Array<Pet>();

            this.$http.get('/angualrdemo/_api/lists/getbytitle(\'Pets\')/items?$select=Title,Age,IsAvailable',
                { headers: { 'Accept': 'application/json;odata=nometadata;' } })
                .then((response: IPetResponse) => {
                    pets = response.data.value as Array<Pet>;
                    defer.resolve(pets);
                });

            return defer.promise;
        }
    }

    angular
        .module('petApp')
        .service('spDataSvc', SPDataService);
}