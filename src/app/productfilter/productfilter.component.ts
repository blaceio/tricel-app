import { Component, OnInit } from '@angular/core';

import { ProductService } from 'app/shared/product/product.service';

@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.scss']
})
export class ProductfilterComponent implements OnInit {

  private id: string;
  private type: string;
  private category: string;
  private division: string;
  private region: string;

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.id = "";
    this.type = "";
    this.category = "";
    this.division = "";
    this.region = "";
    this.refreshdata();
  }

  private refreshdata() {
    this.productservice.getproducts(this.id, this.type, this.category, this.division, this.region);
  }

  private filterbyid(event: any) {
    this.id = event.target.value;
    this.refreshdata();
  }

  private filterbytype(event: any) {
    this.type = event.target.value;
    this.refreshdata();
  }

  private filterbycategory(event: any) {
    this.category = event.target.value;
    this.refreshdata();
  }

  private filterbydivision(event: any) {
    this.division = event.target.value;
    this.refreshdata();
  }

  private filterbyregion(event: any) {
    this.region = event.target.value;
    this.refreshdata();
  }

}
