import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataalertService {
  
  private productssubject = new Subject<any>();
  private summaryentriessubject = new Subject<any>();
  
    constructor() {}
     
    products(message: string) {
        this.productssubject.next(message);
    }

    summaryentries(message: string) {
        this.summaryentriessubject.next(message);
    }

    getProducts(): Observable<any> {
        return this.productssubject.asObservable();
    }

    getSummaryentries(): Observable<any> {
        return this.summaryentriessubject.asObservable();
    }
 }
