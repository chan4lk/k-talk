var PetApp;
(function (PetApp) {
    /**
     * ContainerController
     */
    var ContainerController = (function () {
        function ContainerController($log, spDataService) {
            this.$log = $log;
            this.spDataService = spDataService;
            this.pets = this.spDataService.getAllPets();
        }
        return ContainerController;
    }());
    /**
     * ContainerComponent
     */
    var ContainerComponent = (function () {
        function ContainerComponent() {
            this.controller = ['$log', 'spDataSvc', ContainerController];
            this.templateUrl = 'src/container.html';
            this.controllerAs = 'parent';
        }
        return ContainerComponent;
    }());
    angular.module('petApp')
        .component('petApp', new ContainerComponent());
})(PetApp || (PetApp = {}));
