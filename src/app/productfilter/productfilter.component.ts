import { Component, OnInit } from '@angular/core';

import { ProductService } from 'app/shared/product/product.service';
import { BudgetService } from 'app/shared/budget/budget.service';
import { DateRange } from 'app/shared/daterange/daterange';

@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.scss']
})
export class ProductfilterComponent implements OnInit {

  private daterange: DateRange;
  private id: string;
  private type: string;
  private category: string;
  private division: string;
  private region: string;

  constructor(private productservice: ProductService, private budgetservice: BudgetService) { }

  ngOnInit() {
    this.daterange = new DateRange();
    this.id = "";
    this.type = "";
    this.category = "";
    this.division = "";
    this.region = "";
    this.refreshdata();
  }

  private refreshdata() {
    this.productservice.getproducts(this.id, this.type, this.category, this.division, this.region);
    this.budgetservice.getbudgetentries(this.daterange.startdate, this.daterange.enddate, this.id, this.type, this.category, this.division, this.region);
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
