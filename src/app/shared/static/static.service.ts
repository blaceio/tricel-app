import { Injectable } from '@angular/core';

import { productsrequesturl } from 'app/shared/staticdata/urls'
import { budgetentriesrequesturl } from 'app/shared/staticdata/urls'

@Injectable()
export class StaticDataService {

    constructor() { }

    getproductssrequesturl() : string {
        return productsrequesturl;
    } 

    getbudgetentriesrequesturl() : string {
        return budgetentriesrequesturl;
    } 
    
}

