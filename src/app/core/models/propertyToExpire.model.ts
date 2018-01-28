export class PropertyToExpireModel {
    constructor(
        public title: string,
        public propertyType: string,
        public expiryDate: Date,
        public amount: number,
        public description?: string,
        public photo?: string,
        public _id?: string
    ) { }
}

