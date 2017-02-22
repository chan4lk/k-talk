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
                age: 1,
                isAvailable: true
            },
            {
                name: 'Puppy2',
                picture: 'images/image.jpg',
                age: 2,
                isAvailable: true
            },
            {
                name: 'Puppy',
                picture: 'images/image.jpg',
                age: 2,
                isAvailable: false
            },
            {
                name: 'Puppy5',
                picture: 'images/image.jpg',
                age: 5,
                isAvailable: true
            },
            {
                name: 'Puppy3',
                picture: 'images/image.jpg',
                age: 3,
                isAvailable: true
            },
        ];
    };
    SPDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SPDataService);
    return SPDataService;
}());
exports.SPDataService = SPDataService;
//# sourceMappingURL=SPDataService.js.map