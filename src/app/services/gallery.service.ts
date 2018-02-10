import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Img } from '../models/gallery';

@Injectable()
export class GalleryService {
  imgCol: AngularFirestoreCollection<Img>;
  imgs: any;
  imgDoc: AngularFirestoreDocument<Img>;

  constructor(public afs: AngularFirestore) {
    this.imgCol = this.afs.collection('gallery');
  }
  getImgs(){
    this.imgs = this.imgCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Img;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
    return this.imgs;
  }
  
  addImg(img: Img){
    this.imgCol.add(img);
  }
  deleteImg(img: Img){
    console.log(img.id);
    this.imgDoc = this.afs.doc(`gallery/${img.id}`);
    this.imgDoc.delete();
  }
}

