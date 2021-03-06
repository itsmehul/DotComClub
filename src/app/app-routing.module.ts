import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { FacultyComponent } from './faculty/faculty.component';
import { EventsComponent } from './events/events.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  //Add default route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contacts', component: ContactusComponent },
  { path: 'admin', component: AdminComponent,canActivate: [AuthguardService] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
