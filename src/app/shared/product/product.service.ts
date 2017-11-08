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

    requestproducts(): Observable<Array<Product>> {
        return this.http.get(this.staticdataservice.getproductssrequesturl())
            .map(this.extractData)
            .catch(this.handleError);
    }

    getproducts() {
        this.requestproducts()
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
