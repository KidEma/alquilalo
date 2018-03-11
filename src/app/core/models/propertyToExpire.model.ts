export class PropertyToExpireModel {
    constructor(
        public title: string,
        public type: string,
        public expiryDate: Date,
        public description?: string,
        public price?: number,
        public photoThumb?: string,
        public _id?: string
    ) { }
}

