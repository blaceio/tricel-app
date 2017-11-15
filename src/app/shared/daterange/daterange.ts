import * as moment from 'moment';

export class DateRange {
    public startdate: Date = new Date();
    public enddate: Date = new Date();
    public description: string = "";

    constructor() {
        this.startdate = moment().startOf('month').toDate();
        this.enddate = moment().endOf('month').toDate();
        this.description = "This Month";
    }

}