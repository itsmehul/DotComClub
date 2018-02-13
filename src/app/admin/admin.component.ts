import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../services/gallery.service';
import {Img} from '../models/gallery';
import {FacultyService} from '../services/faculty.service';
import {Post} from '../models/faculty';
import { EventsService } from '../services/events.service';
import { Event } from '../models/events';
import {NoticeService} from '../services/notice.service';
import {Notice} from '../models/notice';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  imgs: Img[];
  img: Img = {
    name: '',
    url: ''
  }
  posts: Post[];
  post: Post = {
    name: '',
    teaches: '',
    url: '',
    desc: ''
  }
  events: Event[];
  event: Event = {
    name: '',
    desc: '',
    url: '',
    date: new Date(),
    place: ''
  }
  nots: Notice[];
  not: Notice = {
    notice: '',
  }

  constructor(
    public facultyService: FacultyService,
    public galleryService: GalleryService,
    public eventService: EventsService,
    public noticeService: NoticeService
  ) { }

  ngOnInit() {
  }
  addPost(){
    if(this.post.name!='' && this.post.teaches!='' && this.post.url!=''){
      this.facultyService.addPost(this.post);
      this.post.name='';
      this.post.teaches='';
      this.post.url='';
      this.post.desc='';
    }
  }
  addImg(){
    if(this.img.name!='' && this.img.url!=''){
      this.galleryService.addImg(this.img);
      this.img.name='';
      this.img.url='';
    }
  }
  addEvent() {
    if (this.event.name != '' && this.event.place != '' && this.event.date!= null) {
      this.eventService.addEvent(this.event);
      this.event.name = '';
      this.event.date = new Date();
      this.event.place = '';
      this.event.url = '';
      this.event.desc = '';
    }
  }
  addNotice(){
    if(this.not.notice!=''){
      this.noticeService.addNotice(this.not);
      this.not.notice='';
    }
  }
}
