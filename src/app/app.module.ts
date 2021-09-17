import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { SelectedComponent } from './selected/selected.component';
import {MatListModule} from '@angular/material/list'; 

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SelectedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
