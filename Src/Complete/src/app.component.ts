namespace PetApp {
    /**
     * PetController
     */
    class PetController implements ng.IComponentController {
        pet: Pet;
        constructor(
            private $log: ng.ILogService) {

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
            this.templateUrl = Constants.PetHTML;
            this.controller = ['$log', PetController];
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