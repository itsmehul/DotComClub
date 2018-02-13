import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import {AuthService} from '../services/auth.service';
import { Event } from '../models/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  panelOpenState: boolean = false;

  events: Event[];
  evnt: Event = {
    name: '',
    desc: '',
    url: '',
    date: new Date(),
    place: ''
  }


  constructor(public eventService: EventsService,
  public aS: AuthService) {

  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    })
  }

  deleteEvent(event, evnt) {
    this.eventService.deleteEvent(evnt);
  }
}



