export class AdressModel {

    //     public streetName: string,
    //     public streetNumber: string,
    //     public zipCode: string,
    //     // geolocalization
    //     public lat: number,
    //     public long: number,
    //     public _id?: string,
    // ) { }

    constructor(
        public _id: Number,
        public houseNumberBusinessName: string,
        public postalCode: string,
        public line1?: string,
        public line2?: string,
        public line3?: string,
        public cityTownLocality?: string,
        public provinceCountyState?: string,
        public countryCodeISO?: string,
        public geoLon?: string,
        public geoLat?: string
    )
    {}

}
