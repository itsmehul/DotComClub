import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Post} from '../models/faculty';


@Injectable()
export class FacultyService {

  postsCol: AngularFirestoreCollection<Post>;
  posts:any;

  constructor(public afs: AngularFirestore) {
    this.postsCol = this.afs.collection('teachers');
    console.log(this.postsCol);
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          console.log(id);
          return { id, data };
        });
      });
    console.log(this.posts);
   }
   getPosts(){
     return this.posts;
   }
   addItem(post: Post){
    this.postsCol.add(post);
   }
}
