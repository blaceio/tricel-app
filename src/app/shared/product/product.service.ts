import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { StaticDataService } from 'app/shared/static/static.service';
import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { Product } from 'app/shared/http/product';

import { AlertService } from 'app/shared/alert/alert.service';

@Injectable()
export class ProductService {

    constructor(private http: Http, private dataalertservice: DataalertService, private staticdataservice: StaticDataService, private alertservice: AlertService) { }

    requestproducts(id: string, type: string, category: string, division: string, region: string): Observable<Array<Product>> {
        
        let url = this.staticdataservice.getproductssrequesturl() + "id=" + id + "&type=" + type + "&category=" + category + "&division=" + division + "&region=" + region; 
       
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getproducts(id: string, type: string, category: string, division: string, region: string) {
        this.requestproducts(id, type, category, division, region)
            .subscribe(
            response => this.processproducts(response),
            error => this.handleError(<any>error)
            );
    }

    private processproducts(res: any) {
        this.dataalertservice.products(res);
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
