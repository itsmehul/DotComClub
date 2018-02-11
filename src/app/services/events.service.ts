import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Event} from '../models/events';


@Injectable()
export class EventsService {

  eventsCol: AngularFirestoreCollection<Event>;
  events:any;
  eventDoc: AngularFirestoreDocument<Event>;

  constructor(public afs: AngularFirestore) {
    this.eventsCol = this.afs.collection('events');}
   getEvents(){
    this.events = this.eventsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Event;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
     return this.events;
   }

   addEvent(event: Event){
    this.eventsCol.add(event);
   }
   deleteEvent(event:Event){
     this.eventDoc=this.afs.doc(`events/${event.id}`);
     this.eventDoc.delete();
   }
}
