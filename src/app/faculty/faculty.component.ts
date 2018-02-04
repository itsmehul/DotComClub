import { Component, OnInit } from '@angular/core';
import {FacultyService} from '../services/faculty.service';
import {Post} from '../models/faculty';

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
  url: ''
}


  constructor(public facultyService: FacultyService) {

   }

  ngOnInit() {
    this.facultyService.getPosts().subscribe(data=>{
      this.posts=data;
    })
  }
  onSubmit(){
    if(this.post.name!='' && this.post.teaches!='' && this.post.url!=''){
      this.facultyService.addItem(this.post);
      this.post.name='';
      this.post.teaches='';
      this.post.url='';
    }
  }

}
