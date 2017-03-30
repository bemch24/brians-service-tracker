import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { AngularFireModule } from 'angularfire2';

var firebaseDatabaseConfig = {
  apiKey: "AIzaSyCcjIc0kjL8E5DhB457P8-c4oXEcjYDzDU",
  authDomain: "servicetracker-1eb29.firebaseapp.com",
  databaseURL: "https://servicetracker-1eb29.firebaseio.com",
  storageBucket: "servicetracker-1eb29.appspot.com",
  messagingSenderId: "790760958917"
};

@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([

    ]),
    AngularFireModule.initializeApp(firebaseDatabaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
