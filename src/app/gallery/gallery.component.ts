import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Img{
  name: string;
  url: string;    
  }

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  imgCol: AngularFirestoreCollection<Img>;
  imgs: any;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.imgCol = this.afs.collection('gallery');
    console.log(this.imgCol);
    this.imgs = this.imgCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Img;
          const id = a.payload.doc.id;
          console.log(id);
          return { id, data };
        });
      });
    console.log(this.imgs);
  }

}
