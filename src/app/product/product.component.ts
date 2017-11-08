import { Component, OnInit } from '@angular/core';

import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { Product } from 'app/shared/http/product';
import { ProductService } from 'app/shared/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor(private productservice: ProductService, private dataalertservice: DataalertService) { }

  ngOnInit() {
    this.products = new Array<Product>();
    this.dataalertservice.getProducts().subscribe(products => { this.reactproducts(products) });
    this.productservice.getproducts();
  }

  private reactproducts(products: Array<Product>) {
    this.products = products;
  }

}
