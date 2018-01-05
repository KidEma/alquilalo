export class PropertyModel {
    constructor(
        public title: string,
        public propertyType: string,
        public administratorsId?: string,
        public addressId?: string,
        public ownersId?: string,
        public picturesId?: string,
        public functionalUnitNumber?: string,
        public description?: string,
        public photo?: string,
        public _id?: string
    ) { }
}

