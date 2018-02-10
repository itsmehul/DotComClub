import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../services/gallery.service';
import {Img} from '../models/gallery';



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

  constructor(public galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getImgs().subscribe(data=>{
      this.imgs=data;
      console.log(data);
    })

  }
  onSubmit(){
    if(this.img.name!='' && this.img.url!=''){
      this.galleryService.addImg(this.img);
      this.img.name='';
      this.img.url='';
    }
  }
  deleteimg(event,img){
    this.galleryService.deleteImg(img);
  }

}
