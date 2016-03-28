System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PageGenerator;
    return {
        setters:[],
        execute: function() {
            //export {AbstractGenerator} from "../../../../../AbstractGenerator/main/src/AbstractGenerator";
            //  namespace generator{
            PageGenerator = (function () {
                //constructor(public url:String = "google.ru",public pageName: String = "Google" ) {}
                function PageGenerator() {
                    this.url = "google.ru";
                    this.pageName = "Google";
                }
                PageGenerator.prototype.getGenerator = function () {
                };
                PageGenerator.prototype.getUrl = function () {
                    return this.url;
                };
                PageGenerator.prototype.getPageName = function () {
                    return this.pageName;
                };
                PageGenerator.prototype.generate = function () { };
                return PageGenerator;
            }());
            exports_1("PageGenerator", PageGenerator);
        }
    }
});
// }
//# sourceMappingURL=PageGenerator.js.map