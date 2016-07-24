namespace PetApp {
    /**
     * ContainerController
     */
    class ContainerController {
        pets: Array<Pet>;
        constructor(private $log: ng.ILogService,
            private dataService: IDataService) {
            this.dataService.getAllPets().then((pets) => {
               this.pets = pets;
            });
        }
    }

    /**
     * ContainerComponent
     */
    class ContainerComponent {
        public templateUrl: string;
        public controller: any;
        public controllerAs: string;

        constructor() {
            this.controller = ['$log', 'spDataSvc', ContainerController];
            this.templateUrl = Constants.ContainerHTML;
            this.controllerAs = 'parent';
        }
    }

    angular.module('petApp')
        .component('petApp', new ContainerComponent());
}