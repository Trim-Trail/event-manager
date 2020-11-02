import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebApiModule } from './web-api/web-api.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WebApiModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
