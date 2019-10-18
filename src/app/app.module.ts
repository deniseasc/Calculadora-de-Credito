import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreditoModule } from './credito/credito.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CreditoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
