import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataalertService {
  
  private productssubject = new Subject<any>();
  
    constructor() {}
     
    products(message: string) {
        this.productssubject.next(message);
    }

    getProducts(): Observable<any> {
        return this.productssubject.asObservable();
    }
    
 }
