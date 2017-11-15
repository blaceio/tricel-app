import { Product } from "./product";

export class Budgetentry {

    public period: Date = new Date();
    public product: Product = new Product();
    public amount: number = 0.;
    
    constructor() {
        this.period = new Date();
        this.product = new Product();
        this.amount = 0.;
    }
}
