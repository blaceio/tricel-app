import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataalertService {
  
  private productssubject = new Subject<any>();
  private budgetentriessubject = new Subject<any>();
  
    constructor() {}
     
    products(message: string) {
        this.productssubject.next(message);
    }

    budgetentries(message: string) {
        this.budgetentriessubject.next(message);
    }

    getProducts(): Observable<any> {
        return this.productssubject.asObservable();
    }

    getBudgetentries(): Observable<any> {
        return this.budgetentriessubject.asObservable();
    }
 }
