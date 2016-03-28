/// <reference path="../../../../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../../resources/library/kendo/ts/kendo.all.d.ts" />
// import  {PageGenerator} from "../../../../../GeneratorImpl/main/src/tmp/tmp1/PageGenerator";
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AbstractPage;
    return {
        setters:[],
        execute: function() {
            AbstractPage = (function () {
                function AbstractPage() {
                    // console.log(new PageGenerator().getUrl());
                }
                /**
                 * It is expected that this method must be called when page is changed.
                 * @param callbackFunction - is a callback method with a boolean parameter,
                 *                           which tells whether the page can be left or not.
                 */
                AbstractPage.prototype.onBeforeLeave = function (callbackFunction) {
                };
                /**
                 * It is expected that this method must be called when page url is changed.
                 * This method detects which property is changed and from which level of the
                 * component hierarchy data should be reloaded.
                 */
                AbstractPage.prototype.onUrlParameterChanged = function () {
                };
                return AbstractPage;
            }());
            exports_1("AbstractPage", AbstractPage);
        }
    }
});
//# sourceMappingURL=AbstractPage.Component.js.map