declare var process: {
    env: {
        NODE_ENV: string;
    }
};

namespace PetApp {
    /**
     * Constants
     */
    export class Constants {

        public static get Base(): string {
            if (window.location.host !== 'localhost:3000') {
                return '/angualrdemo/siteassets/';
            }
            return '';
        }

        public static get ContainerHTML(): string {
            return `${Constants.Base}release/container.html`;
        }

        public static get PetHTML(): string {
            return `${Constants.Base}release/pet.html`;
        }

    }
}