namespace PetApp {
    /**
     * PetController
     */
    class PetController implements ng.IComponentController {
        pet: Pet;

        constructor(
            private $log: ng.ILogService,
            private dataService: IDataService) {

            this.$log.info('Welcome');
        }
    }

    class PetComponent implements ng.IComponentOptions {
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;
        public bindings: any;

        /** 
         *Create a new instance of PetComponent.
         */
        constructor() {
            this.templateUrl = 'src/pet.html';
            this.controller = ['$log', 'spDataSvc', PetController];
            this.controllerAs = 'vm';
            this.bindings = {
                pet: '<'
            };
        }

    }

    angular
        .module('petApp')
        .component('myPet', new PetComponent());
}