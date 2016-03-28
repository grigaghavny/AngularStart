System.register(["../components/ProjectEditPage.Component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProjectEditPage_Component_1;
    var Routes, APP_ROUTES;
    return {
        setters:[
            function (ProjectEditPage_Component_1_1) {
                ProjectEditPage_Component_1 = ProjectEditPage_Component_1_1;
            }],
        execute: function() {
            exports_1("Routes", Routes = {
                home: {
                    path: '/',
                    redirectTo: ['ProjectEditPage']
                },
                editPage: {
                    path: '/project',
                    name: 'ProjectEditPage',
                    component: ProjectEditPage_Component_1.ProjectEditPage
                }
            });
            exports_1("APP_ROUTES", APP_ROUTES = Object.keys(Routes).map(function (name) { return Routes[name]; }));
        }
    }
});
//# sourceMappingURL=Route.Config.js.map