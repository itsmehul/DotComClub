import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Notice } from '../models/notice';

@Injectable()
export class NoticeService {
  notCol: AngularFirestoreCollection<Notice>;
  nots: any;
  notDoc: AngularFirestoreDocument<Notice>;

  constructor(public afs: AngularFirestore) { 
    this.notCol = this.afs.collection('notices');
  }
  getNotices(){
    this.nots = this.notCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Notice;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
    return this.nots;
  }
  
  addNotice(not: Notice){
    this.notCol.add(not);
  }
  deleteNotice(not: Notice){
    console.log(not);
    this.notDoc = this.afs.doc(`notices/${not.id}`);
    this.notDoc.delete();
  }
}
