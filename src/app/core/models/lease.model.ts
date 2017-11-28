export class LeaseModel {
    constructor(
        public tenantsId: string[],
        public propertyId: string,
        public startDatetime: Date,
        public endDatetime: Date,
        public active: boolean,
        public comments?: string,
        public _id?: string
    ) { }
}
