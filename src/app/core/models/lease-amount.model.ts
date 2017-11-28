export class LeaseAmountModel {
    constructor(
        public leaseId: string,
        public startDatetime: Date,
        public endDatetime: Date,
        public amount: number,
        public paymentType: string,
        public _id?: string
      ) { }
}

