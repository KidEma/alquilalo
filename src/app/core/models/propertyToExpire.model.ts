export class PropertyToExpireModel {
    constructor(
        public title: string,
        public type: string,
        public expiryDate: Date,
        public amount: number,
        public description?: string,
        public photoThumb?: string,
        public _id?: string
    ) { }
}

