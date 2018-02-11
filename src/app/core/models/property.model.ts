export class PropertyModel {
    // constructor(
    //     public title: string,
    //     public propertyType: string,
    //     public administratorsId?: string,
    //     public addressId?: string,
    //     public ownersId?: string,
    //     public picturesId?: string,
    //     public functionalUnitnumber?: string,
    //     public description?: string,
    //     public photo?: string,
    //     public _id?: string
    // ) { }

    constructor(
        public _id: number,
        public title: string,
        public userIds?: [number],
        public ownerIds?: [number],
        public agencyId?: number,
        public activeLeaseId?: number,
        public leaseIds?: [number],
        public addressId?: number,
        public description?: string,
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

