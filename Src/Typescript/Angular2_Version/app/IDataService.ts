import { Pet } from './Pet';

export interface IDataService {
    getAllPets(): Array<Pet>;
}
