import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core/";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "mygrid";

  form = new FormGroup({});
  model: any = {
    investments: [
      {
        vin: "VIN1",
        year: "2021-02-01",
        make: "make1",
        bodyStyle: "bodyStyle1"
      },
      {
        vin: "VIN2",
        year: "2021-02-02",
        make: "make2",
        bodyStyle: "bodyStyle2"
      },
      {
        vin: "VIN3",
        year: "2021-02-03",
        make: "make3",
        bodyStyle: "bodyStyle3"
      },
      {
        vin: "VIN4",
        year: "2021-02-04",
        make: "make4",
        bodyStyle: "bodyStyle4"
      },
      {
        vin: "VIN5",
        year: "2021-02-05",
        make: "make5",
        bodyStyle: "bodyStyle5"
      },
      {
        vin: "VIN6",
        year: "2021-02-06",
        make: "make6",
        bodyStyle: "bodyStyle6"
      },
      {
        vin: "VIN7",
        year: "2021-02-07",
        make: "make7",
        bodyStyle: "bodyStyle7"
      },
      {
        vin: "VIN8",
        year: "2021-02-08",
        make: "make8",
        bodyStyle: "bodyStyle8"
      },
      
    ],
  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: "section-label",
      template: "<h4>Can you tell us which vehicle you're insuring?</h4>",
    },
    {
      key: "investments",
      type: "grid",
      className: "ag-theme-balham",
      templateOptions: {
        height: "370px",
        gridOptions: {
          rowHeight: 42,
          columnDefs: [
            {
              headerName: "VIN",
              field: "vin",
              sortable: true,
              width: 250,
            },
            {
              headerName: "Year",
              field: "year",
              sortable: true,
              width: 250,
            },
            {
              headerName: "Make",
              field: "make",
              width: 250,
            },
            {
              headerName: "Body Style",
              field: "bodyStyle",
              // width: 330,
            },
          ],
        },
      },
      fieldArray: {
        fieldGroup: [
          {
            type: "input",
            key: "vin",
            templateOptions: {
              required: true,
            },
          },
          {
            type: "input",
            key: "year",
            templateOptions: {
              type: "date",
            },
          },
          {
            type: "input",
            key: "make",
            templateOptions: {},
          },
          {
            type: "input",
            key: "bodyStyle",
            templateOptions: {},
          },
        ],
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
