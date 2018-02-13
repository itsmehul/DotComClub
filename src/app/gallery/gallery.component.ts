import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../services/gallery.service';
import {Img} from '../models/gallery';
import {AuthService} from '../services/auth.service';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imgs: Img[];
  img: Img = {
    name: '',
    url: ''
  }

  constructor(public galleryService: GalleryService,
  public aS: AuthService) { }

  ngOnInit() {
    this.galleryService.getImgs().subscribe(data=>{
      this.imgs=data;
      console.log(data);
    })

  }

  deleteimg(event,img){
    this.galleryService.deleteImg(img);
  }

}
