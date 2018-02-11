import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Event } from '../models/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  panelOpenState: boolean = false;

  events: Event[];
  event: Event = {
    name: '',
    date: new Date(),
    place: ''
  }


  constructor(public eventService: EventsService) {

  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    })
  }
  onSubmit() {
    if (this.event.name != '' && this.event.place != '' && this.event.date!= null) {
      this.eventService.addEvent(this.event);
      this.event.name = '';
      this.event.date = new Date();
      this.event.place = '';
    }
  }
  deleteEvent(e, event) {
    this.eventService.deleteEvent(this.event);
  }
}



