import { Product } from "./product";

export class Summaryentry {

    public period: Date = new Date();
    public product: Product = new Product();
    public actual: number = 0.;
    public budget: number = 0.;
    public forecast: number = 0.;
    
    constructor() {
        this.period = new Date();
        this.product = new Product();
        this.actual = 0.;
        this.budget = 0.;
        this.forecast = 0.;
    }
}
