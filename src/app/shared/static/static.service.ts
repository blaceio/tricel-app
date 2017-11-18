import { Injectable } from '@angular/core';

import { productsrequesturl } from 'app/shared/staticdata/urls'
import { summaryentriesrequesturl } from 'app/shared/staticdata/urls'
import { budgetupdateupdateurl } from 'app/shared/staticdata/urls'

@Injectable()
export class StaticDataService {

    constructor() { }

    getproductssrequesturl() : string {
        return productsrequesturl;
    } 

    getsummaryentriesrequesturl() : string {
        return summaryentriesrequesturl;
    } 

    getbudgetupdateupdateurl() : string {
        return budgetupdateupdateurl;
    }
    
}

