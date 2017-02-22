module PetApp{
    /**
     * ContainerController
     */
    class ContainerController {
        pets:Array<Pet>;
        constructor(private $log:ng.ILogService,
                    private spDataService:IDataService) {
           this.pets = this.spDataService.getAllPets();
        }
    }

    /**
     * ContainerComponent
     */
    class ContainerComponent {
        public templateUrl:string;
        public controller: any;
        public controllerAs: string;

        constructor() {
            this.controller = ['$log', 'spDataSvc', ContainerController];
            this.templateUrl = 'src/container.html';
            this.controllerAs = 'parent';
        }
    }

    angular.module('petApp')
            .component('petApp', new ContainerComponent());
}