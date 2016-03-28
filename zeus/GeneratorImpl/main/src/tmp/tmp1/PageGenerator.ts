import {AbstractGenerator} from "../../../../../AbstractGenerator/main/src/AbstractGenerator";
//export {AbstractGenerator} from "../../../../../AbstractGenerator/main/src/AbstractGenerator";
//  namespace generator{
    export  class PageGenerator implements  AbstractGenerator {

        url :String;
        pageName : String;
        //constructor(public url:String = "google.ru",public pageName: String = "Google" ) {}
        constructor() {
            this.url  = "google.ru";
            this.pageName  = "Google";
        }
        public getGenerator(): void {

        }
        public getUrl() : String {
            return this.url;
        }

        public getPageName () : String {
            return this.pageName;
        }
        public generate (): void {}
    }
// }
