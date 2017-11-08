import { Reference } from './reference';

export class Product {
    public id: string = "";
    public description: string = "";
    public types: Reference = new Reference();
    public categories: Reference = new Reference();
    public regions: Reference = new Reference();


    constructor() {
        this.id = "";
        this.description = "";
        this.types = new Reference();
        this.categories = new Reference();
        this.regions = new Reference();
    }
}



    