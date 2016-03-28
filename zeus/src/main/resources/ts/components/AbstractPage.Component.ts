/// <reference path="../../../../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../../resources/library/kendo/ts/kendo.all.d.ts" />
// import  {PageGenerator} from "../../../../../GeneratorImpl/main/src/tmp/tmp1/PageGenerator";

export abstract class AbstractPage {

    constructor() {
        // console.log(new PageGenerator().getUrl());
    }

    /**
     * It is expected that this method must be called when page is changed.
     * @param callbackFunction - is a callback method with a boolean parameter,
     *                           which tells whether the page can be left or not.
     */
    public onBeforeLeave(callbackFunction): void {

    }

    /**
     * It is expected that this method must be called when page url is changed.
     * This method detects which property is changed and from which level of the
     * component hierarchy data should be reloaded.
     */
    public onUrlParameterChanged(): void {

    }
}