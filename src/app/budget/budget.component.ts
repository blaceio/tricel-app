import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { Budgetentry } from 'app/shared/http/budgetentry';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  private budgetentries: Array<Budgetentry>;

  constructor(private dataalertservice: DataalertService) { }

  ngOnInit() {
    this.budgetentries = new Array<Budgetentry>();
    this.dataalertservice.getBudgetentries().subscribe(budgetentries => { this.reactbudgetentries(budgetentries) });
  }

  private reactbudgetentries(budgetentries: Array<Budgetentry>) {
    this.budgetentries = budgetentries;
  }
}