import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { Summaryentry } from 'app/shared/http/summaryentry';
import { SummaryService } from 'app/shared/summary/summary.service';
import { DateRange } from 'app/shared/daterange/daterange';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  private summaryentries: Array<Summaryentry>;
  private daterange: DateRange;

  constructor(private dataalertservice: DataalertService, private summaryservice: SummaryService) { }

  ngOnInit() {
    this.daterange = new DateRange();
    this.summaryentries = new Array<Summaryentry>();
    this.dataalertservice.getSummaryentries().subscribe(summaryentries => { this.reactsummaryentries(summaryentries) });
    this.summaryservice.getsummaryentries(this.daterange.startdate, this.daterange.enddate, "", "", "", "", "");
  }

  private reactsummaryentries(summaryentries: Array<Summaryentry>) {
    this.summaryentries = summaryentries;
  }
}