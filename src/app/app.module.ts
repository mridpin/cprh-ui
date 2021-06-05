import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './copyright/search/search.component';
import { SearchBarComponent } from './copyright/search/search-bar/search-bar.component';
import { SearchResultsComponent } from './copyright/search/search-results/search-results.component';
import { CopyrightViewComponent } from './copyright/search/search-results/copyright-view/copyright-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightComponent,
    SearchComponent,
    SearchBarComponent,
    SearchResultsComponent,
    CopyrightViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
