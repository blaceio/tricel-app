import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DatePipe } from '@angular/common';

import { StaticDataService } from 'app/shared/static/static.service';
import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { Budgetentry } from 'app/shared/http/budgetentry';
import { AlertService } from 'app/shared/alert/alert.service';

@Injectable()
export class BudgetService {

    constructor(private datePipe: DatePipe, private http: Http, private dataalertservice: DataalertService, private staticdataservice: StaticDataService, private alertservice: AlertService) { }

    requestbudgetentries(start: Date, end: Date, id: string, type: string, category: string, division: string, region: string): Observable<Array<Budgetentry>> {
  
        let url = this.staticdataservice.getbudgetentriesrequesturl() + "start=" + this.datePipe.transform(start, 'yyyy-MM-dd') + "&end=" + this.datePipe.transform(end, 'yyyy-MM-dd') + "&product=" + id + "&type=" + type + "&category=" + category + "&division=" + division + "&region=" + region; 
       
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getbudgetentries(start: Date, end: Date, id: string, type: string, category: string, division: string, region: string) {
        this.requestbudgetentries(start, end, id, type, category, division, region)
            .subscribe(
            response => this.processbudgetentries(response),
            error => this.handleError(<any>error)
            );
    }

    private processbudgetentries(res: any) {
        this.dataalertservice.budgetentries(res);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        
        let errMsg: string;
        if( error instanceof Response) {
            const body = error.json() || '';
            const err = body.message || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        this.alertservice.danger(errMsg);
        return Observable.throw(errMsg);
    }

}
