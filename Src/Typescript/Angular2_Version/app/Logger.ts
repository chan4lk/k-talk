import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    /**
     *
     */
    constructor() {
                
    }
    
    get log() {
        return console.log.bind(console);
    }
}