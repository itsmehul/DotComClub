import { Component, OnInit } from '@angular/core';
import {FacultyService} from '../services/faculty.service';
import {Post} from '../models/faculty';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

posts: Post[];
post: Post = {
  name: '',
  teaches: '',
  url: '',
  desc: ''
}


  constructor(public facultyService: FacultyService,
  public aS: AuthService) {

   }

  ngOnInit() {
    this.facultyService.getPosts().subscribe(data=>{
      this.posts=data;
    })
  }

  deletePost(event,post){
    this.facultyService.deletePost(post);
  }
}
