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
        investmentName: "project1",
        investmentDate: "2021-02-01",
        stockIdentifier: 1,
      },
      {
        investmentName: "project2",
        investmentDate: "2021-02-02",
        stockIdentifier: 2,
      },
      {
        investmentName: "project3",
        investmentDate: "2021-02-03",
        stockIdentifier: 3,
      },
      {
        investmentName: "project4",
        investmentDate: "2021-02-04",
        stockIdentifier: 4,
      },
      {
        investmentName: "project5",
        investmentDate: "2021-02-05",
        stockIdentifier: 5,
      },
      {
        investmentName: "project6",
        investmentDate: "2021-02-06",
        stockIdentifier: 6,
      },
      {
        investmentName: "project7",
        investmentDate: "2021-02-07",
        stockIdentifier: 7,
      },
      {
        investmentName: "project8",
        investmentDate: "2021-02-08",
        stockIdentifier: 8,
      },
    ],
  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: "section-label",
      template: "<h5>Personal data</h5>",
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
              headerName: "Name of Investment",
              field: "investmentName",
              sortable: true,
              width: 350,
            },
            {
              headerName: "Date of Investment",
              field: "investmentDate",
              sortable: true,
              width: 350,
            },
            {
              headerName: "Stock Identifier",
              field: "stockIdentifier",
              // width: 330,
            },
          ],
        },
      },
      fieldArray: {
        fieldGroup: [
          {
            type: "input",
            key: "investmentName",
            templateOptions: {
              required: true,
            },
          },
          {
            type: "input",
            key: "investmentDate",
            templateOptions: {
              type: "date",
            },
          },
          {
            type: "input",
            key: "stockIdentifier",
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
