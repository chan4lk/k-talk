"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Logger_1 = require('./Logger');
var SPDataService_1 = require('./SPDataService');
var app_component_1 = require('./app.component');
var ContainerComponent = (function () {
    function ContainerComponent($log, spDataService) {
        this.$log = $log;
        this.spDataService = spDataService;
        this.pets = this.spDataService.getAllPets();
    }
    ContainerComponent = __decorate([
        core_1.Component({
            selector: 'pet-app',
            templateUrl: 'app/container.html',
            directives: [app_component_1.PetComponent],
            providers: [Logger_1.LoggerService, SPDataService_1.SPDataService]
        }), 
        __metadata('design:paramtypes', [Logger_1.LoggerService, SPDataService_1.SPDataService])
    ], ContainerComponent);
    return ContainerComponent;
}());
exports.ContainerComponent = ContainerComponent;
//# sourceMappingURL=app.component.container.js.map