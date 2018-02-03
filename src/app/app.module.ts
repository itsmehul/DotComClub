import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { FacultyComponent } from './faculty/faculty.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';

var fireConfig = {
  apiKey: "AIzaSyCGBvOpw_r-ZdfJMAPEN1EP65hCmf2Zz8M",
  authDomain: "dotcomclub-a2d06.firebaseapp.com",
  databaseURL: "https://dotcomclub-a2d06.firebaseio.com",
  projectId: "dotcomclub-a2d06",
  storageBucket: "dotcomclub-a2d06.appspot.com",
  messagingSenderId: "456796701328"
};

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    FacultyComponent,
    EventsComponent,
    HomeComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(fireConfig),  // Add this
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
