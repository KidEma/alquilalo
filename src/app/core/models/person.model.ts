export class PersonModel {
    constructor(
        public name: string,
        public commercialIdNumber: string,
        public commercialAddresId?: string,
        public actualAddresId?: string,
        public personType?: string,
        public comments?: string,
        public _id?: string
      ) { }
}
