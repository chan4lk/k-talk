var PetApp;
(function (PetApp) {
    /**
     * PetController
     */
    var PetController = (function () {
        function PetController($log, dataService) {
            this.$log = $log;
            this.dataService = dataService;
            this.$log.info('Welcome');
        }
        return PetController;
    }());
    var PetComponent = (function () {
        /**
         *Create a new instance of PetComponent.
         */
        function PetComponent() {
            this.templateUrl = 'src/pet.html';
            this.controller = ['$log', 'spDataSvc', PetController];
            this.controllerAs = 'vm';
            this.bindings = {
                pet: '<'
            };
        }
        return PetComponent;
    }());
    angular
        .module('petApp')
        .component('myPet', new PetComponent());
})(PetApp || (PetApp = {}));
