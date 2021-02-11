import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
// import { AgGridModule } from "ag-grid-angular";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";

import { GridTypeComponent } from "./grid.type";
// import { GridFormlyCellComponent } from "./grid-formly-cell.component";

import { AgGridModule } from "ag-grid-angular";
@NgModule({
  declarations: [AppComponent, GridTypeComponent],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        {
          name: "grid",
          component: GridTypeComponent,
          defaultOptions: {
            templateOptions: {
              width: "100%",
              height: "800px",
            },
          },
        },
      ],
    }),
    FormlyBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
