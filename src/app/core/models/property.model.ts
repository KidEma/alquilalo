export class PropertyModel {
    constructor(
        public _id: string,
        public title: string,
        public userIds?: [number],
        public ownerIds?: [number],
        public agencyId?: number,
        public activeLeaseId?: number,
        public leaseIds?: [number],
        public addressId?: number,
        public description?: string,
        public price?: number,
        public photoThumb?: string,
        public type?: string,
        public photos?: [string],
        public bathRooms?: number,
        public bedRooms?: number,
        public totalRooms?: number,
        public furnished?: Boolean
    )
    {}  
}

