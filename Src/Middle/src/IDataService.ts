namespace PetApp {
    export interface IDataService {
        getAllPets(): ng.IPromise<Array<Pet>>;
    }
}