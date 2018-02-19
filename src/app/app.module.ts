import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './@core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LibModule } from "./@lib/lib.module";
import { MarkdownModule } from "ngx-markdown";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    LibModule.forRoot(),
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
