import { Component, OnInit } from '@angular/core';
import {NoticeService} from '../services/notice.service';
import {Notice} from '../models/notice';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nots: Notice[];
  not: Notice = {
    notice: '',
  }

  constructor(public noticeService: NoticeService,
  public aS: AuthService) { }

  ngOnInit() {
    this.noticeService.getNotices().subscribe(data=>{
      this.nots=data;
      console.log(data);
    })

  }

  deleteNotice(event,not){
    this.noticeService.deleteNotice(not);
  }

}