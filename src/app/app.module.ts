import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { FacultyComponent } from './faculty/faculty.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FacultyService } from './services/faculty.service';
import { GalleryService } from './services/gallery.service';
import { EventsService } from './services/events.service';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './services/auth.service';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AuthguardService } from './services/authguard.service';

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
    ContactusComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(fireConfig),  // Add this
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [FacultyService, GalleryService, EventsService, AuthService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
