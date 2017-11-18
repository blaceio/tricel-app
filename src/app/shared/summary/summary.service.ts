import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DatePipe } from '@angular/common';

import { StaticDataService } from 'app/shared/static/static.service';
import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { Summaryentry } from 'app/shared/http/summaryentry';
import { AlertService } from 'app/shared/alert/alert.service';

@Injectable()
export class SummaryService {

    constructor(private datePipe: DatePipe, private http: Http, private dataalertservice: DataalertService, private staticdataservice: StaticDataService, private alertservice: AlertService) { }

    requestsummaryentries(start: Date, end: Date, id: string, type: string, category: string, division: string, region: string): Observable<Array<Summaryentry>> {
  
        let url = this.staticdataservice.getsummaryentriesrequesturl() + "start=" + this.datePipe.transform(start, 'yyyy-MM-dd') + "&end=" + this.datePipe.transform(end, 'yyyy-MM-dd') + "&product=" + id + "&type=" + type + "&category=" + category + "&division=" + division + "&region=" + region; 
       
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updatebudget(start: Date, end: Date, product: string, type: string, category: string, division: string, region: string, updateby: number): Observable<String> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.staticdataservice.getbudgetupdateupdateurl(),
            { start, end, product, type, category, division, region, updateby }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getsummaryentries(start: Date, end: Date, id: string, type: string, category: string, division: string, region: string) {
        this.requestsummaryentries(start, end, id, type, category, division, region)
            .subscribe(
            response => this.processsummaryentries(response),
            error => this.handleError(<any>error)
            );
    }

    sendupdatebudget(start: Date, end: Date, id: string, type: string, category: string, division: string, region: string, amount: number) {
        this.updatebudget(start, end, id, type, category, division, region, amount)
            .subscribe(
            response => this.processsummaryentries(response),
            error => this.handleError(<any>error)
            );
    }

    private processsummaryentries(res: any) {
        this.dataalertservice.summaryentries(res);
    }

    private processupdate(res: any) {
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private donothing(res: Response) {
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
