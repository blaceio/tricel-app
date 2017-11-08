import { Injectable } from '@angular/core';

import { productsrequesturl } from 'app/shared/staticdata/urls'

@Injectable()
export class StaticDataService {

    constructor() { }

    getproductssrequesturl() : string {
        return productsrequesturl;
    } 
}

