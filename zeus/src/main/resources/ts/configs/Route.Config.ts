import {RouteDefinition} from "angular2/router";
import {ProjectEditPage} from "../components/ProjectEditPage.Component";
import {AppComponent} from "../app";

export const Routes = {
    home: {
        path: '/',
        redirectTo: ['ProjectEditPage']
    },
    editPage: {
        path: '/project',
        name: 'ProjectEditPage',
        component: ProjectEditPage
    }
};

export const APP_ROUTES: RouteDefinition[] =
    Object.keys(Routes).map((name) => Routes[name]);
