export class AdressModel {

    constructor(
        public streetName: string,
        public streetNumber: string,
        public zipCode: string,
        // geolocalization
        public lat: number,
        public long: number,
        public _id?: string,
    ) { }
}
