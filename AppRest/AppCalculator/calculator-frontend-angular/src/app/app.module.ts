import { PairNumbersService } from './pair-numbers-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data-service';
import { PairNumbersComponent } from './pair-numbers/pair-numbers.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { SubtComponent } from './subt/subt.component';
import { MulComponent } from './mul/mul.component';
import { DivComponent } from './div/div.component';

@NgModule({
  declarations: [
    AppComponent,
    PairNumbersComponent,
    AddComponent,
    SubtComponent,
    MulComponent,
    DivComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PairNumbersService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
