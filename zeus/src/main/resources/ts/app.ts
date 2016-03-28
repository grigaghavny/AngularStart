import {Component, provide} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";
import {Routes, APP_ROUTES} from "./configs/Route.Config"

@Component({
    selector: 'app',
    templateUrl: 'src/main/resources/templates/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})]
})
@RouteConfig(APP_ROUTES)
export class AppComponent{

    constructor() {

    }

}
