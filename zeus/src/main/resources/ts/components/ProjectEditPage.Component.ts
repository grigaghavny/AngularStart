
import {Component, provide} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {AbstractPage} from "./AbstractPage.Component";
import {Routes, APP_ROUTES} from "../configs/Route.Config";
import  {PageGenerator} from "../../../../../GeneratorImpl/main/src/tmp/tmp1/PageGenerator";

@Component({
    selector: "project-edit-page",
    templateUrl: "src/main/resources/templates/projectEditPage.html",
    directives: [ROUTER_DIRECTIVES],
})
export class ProjectEditPage extends AbstractPage {
    generator : PageGenerator;
    constructor() {
        console.log(new PageGenerator().getUrl());
        super();
         //this.generator = new PageGenerator();
    }

    // private generator :AbstractGenerator;
    /**
     * This is a component lifecycle event provided by the 'Lifecycle Hook' API.
     * It triggers when component view is initialized.
     * Initializes Kendo components used in the component view.
     */
    ngAfterViewInit() {

        $(".form-error-msg-link").on("click", function () {
            var panelbar = $("#panelbar").data("kendoPanelBar");
            panelbar.collapse($("li", panelbar.element), false);
        });

        $("#panelbar").kendoPanelBar({
            expandMode: "multiple"
        });

        // create ComboBox from input HTML element
        $("#size1").kendoComboBox({
            dataTextField: "text",
            dataValueField: "value",
            dataSource: [
                {text: "Cotton", value: "1"},
                {text: "Polyester", value: "2"},
                {text: "Cotton/Polyester", value: "3"},
                {text: "Rib Knit", value: "4"}
            ],
            filter: "contains",
            suggest: true,
            index: 3
        });

        // create ComboBox from select HTML element
        $("#size1").kendoComboBox();

        // create DatePicker from input HTML element
        $("#datepicker1").kendoDatePicker();

        $("#monthpicker1").kendoDatePicker({
            // defines the start view
            start: "year",

            // defines when the calendar should return date
            depth: "year",

            // display month and year in the input
            format: "MMMM yyyy"
        });

        // create DatePicker from input HTML element
        $("#datepicker2").kendoDatePicker();

        $("#monthpicker2").kendoDatePicker({
            // defines the start view
            start: "year",

            // defines when the calendar should return date
            depth: "year",

            // display month and year in the input
            format: "MMMM yyyy"
        });

        // create DatePicker from input HTML element
        $("#datepicker3").kendoDatePicker();

        $("#monthpicker3").kendoDatePicker({
            // defines the start view
            start: "year",

            // defines when the calendar should return date
            depth: "year",

            // display month and year in the input
            format: "MMMM yyyy"
        });

        $("#program").kendoComboBox({
            placeholder: "Select program",
            dataTextField: "ProductName",
            dataValueField: "ProductID",
            filter: "contains",
            autoBind: false,
            minLength: 1,
            dataSource: {
                type: "odata",
                serverFiltering: true,
                transport: {
                    read: {
                        url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                    }
                }
            }
        });

        // create MultiSelect from select HTML element
        var required = $("#multiselect-box").kendoMultiSelect().data("kendoMultiSelect");

        // create data for Kendo Grid and initializing it.
        var dataSource = new kendo.data.DataSource({
            data: [
                {sectorId: 1, sector: "Sector 1", subSector: "Subsector 1", percent: 15},
                {sectorId: 1, sector: "Sector 1", subSector: "Subsector 12", percent: 18},
                {sectorId: 2, sector: "Sector 2", subSector: "Subsector 2", percent: 5},
                {sectorId: 3, sector: "Sector 3", subSector: "Subsector 3", percent: 7.8},
                {sectorId: 4, sector: "Sector 4", subSector: "Subsector 4", percent: 12},
                {sectorId: 4, sector: "Sector 4", subSector: "Subsector 4", percent: 12},
                {sectorId: 4, sector: "Sector 4", subSector: "Subsector 4", percent: 12},
                {sectorId: 4, sector: "Sector 4", subSector: "Subsector 4", percent: 12},
                {sectorId: 4, sector: "Sector 4", subSector: "Subsector 4", percent: 12},
                {sectorId: 4, sector: "Sector 4", subSector: "Subsector 4", percent: 12},
                {sectorId: 1, sector: "Sector 1", subSector: "Subsector 1", percent: 15},
                {sectorId: 1, sector: "Sector 1", subSector: "Subsector 12", percent: 18},
                {sectorId: 2, sector: "Sector 2", subSector: "Subsector 2", percent: 5},
                {sectorId: 3, sector: "Sector 3", subSector: "Subsector 3", percent: 7.8},
                {sectorId: 4, sector: "Sector 4", subSector: "Subsector 4", percent: 12},
                {sectorId: 4, sector: "Sector 4", subSector: "Subsector 4", percent: 12},
                {sectorId: 4, sector: "Sector 4", subSector: "Subsector 4", percent: 12}
            ],

            batch: true,
            pageSize: 20,
            schema: {
                model: {
                    id: "sectorId",
                    fields: {
                        sectorId: {editable: false, nullable: true},
                        sector: {validation: {required: true}},
                        subSector: {validation: {required: true}},
                        percent: {type: "number"}
                    }
                }
            },

        });

        $("#grid").kendoGrid({
            dataSource: dataSource,
            pageable: false,
            sortable: true,
            dataBound: function (e) {
                e.sender.tbody.find(".k-edit").each(function (idx, element) {
                    $(element).removeClass("k-icon");
                    $(element).removeClass("k-edit").addClass("fa fa-pencil");
                });
                e.sender.tbody.find(".k-delete").each(function (idx, element) {
                    $(element).removeClass("k-icon");
                    $(element).removeClass("k-delete").addClass("fa fa-trash-o");
                });
            },
            toolbar: ["create"],
            columns: [
                {
                    field: "sector",
                    title: "Sector",
                    format: "{0:c}",
                    width: "auto",
                    footerTemplate: "Total",
                    footerAttributes: {
                        "class": "form-table-total",
                    }
                },
                {
                    field: "subSector", title: "Sub-sector", width: "300px", footerAttributes: {
                    "class": "form-table-total",
                }

                },
                {
                    field: "percent", title: "Percent", footerTemplate: "100", width: "120px", attributes: {
                        "class": "form-align-right",
                    },
                    footerAttributes: {
                        "class": "form-table-total form-align-right",
                    },
                    headerAttributes: {
                        "class": "form-align-right",
                    }
                },
                {
                    command: ["edit", "destroy"], title: "&nbsp;", width: "90px", footerAttributes: {
                        "class": "form-table-total",
                    }
                }
            ],
            editable: "inline"
        });

        componentHandler.upgradeAllRegistered();


    }
}