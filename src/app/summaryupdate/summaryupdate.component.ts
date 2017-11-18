import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { SummaryService } from 'app/shared/summary/summary.service';
import { DateRange } from 'app/shared/daterange/daterange';

@Component({
  selector: 'app-summaryupdate',
  templateUrl: './summaryupdate.component.html',
  styleUrls: ['./summaryupdate.component.scss']
})
export class SummaryupdateComponent implements OnInit {

  private daterange: DateRange;
  private id: string;
  private type: string;
  private category: string;
  private division: string;
  private region: string;
  private budgetupdate: number;

  constructor(private summaryservice: SummaryService) { }

  ngOnInit() {
    this.daterange = new DateRange();
    this.id = "";
    this.type = "";
    this.category = "";
    this.division = "";
    this.region = "";
    this.budgetupdate = 0.;
    this.refreshdata();
  }

  private refreshdata() {
    this.summaryservice.getsummaryentries(this.daterange.startdate, this.daterange.enddate, this.id, this.type, this.category, this.division, this.region);
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

  private filterbyperiod(month: any) {
   
    let thisYear = (new Date()).getFullYear();    
    let startDate = moment([thisYear, month]);
    let endDate = moment(startDate).endOf('month');
    this.daterange.startdate = startDate.toDate();
    this.daterange.enddate = endDate.toDate();

    this.refreshdata();
  }
  private updatebudget(event: any) {
    this.budgetupdate = event.target.value;
  }

  private sendbudgetupdate() {
    this.summaryservice.sendupdatebudget(this.daterange.startdate, this.daterange.enddate, this.id, this.type, this.category, this.division, this.region, this.budgetupdate);
  }
}
