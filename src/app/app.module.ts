import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CopyrightComponent } from './copyright/copyright.component';
import { SearchComponent } from './copyright/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular material
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
