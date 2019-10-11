import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatricesModule } from './matrices/matrices.module';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, MatricesModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
