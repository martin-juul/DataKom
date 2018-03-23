import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './@core/core.module';
import { SharedModule } from './shared/shared.module';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { LibModule } from "./@lib/lib.module";
import { MarkdownModule } from "ngx-markdown";
import { TitleService } from "./shared/title.service";
import { RouterService } from './shared/router.service';

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
    MarkdownModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [
    Title,
    TitleService,
    RouterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private routerService: RouterService) { }
}
