import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AgGridModule } from "ag-grid-angular";
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AgGridModule.withComponents([]), ReactiveFormsModule, FormlyModule.forRoot({ extras: { lazyRender: true } }), FormlyBootstrapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
