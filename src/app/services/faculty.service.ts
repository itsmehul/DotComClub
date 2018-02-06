import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Post} from '../models/faculty';


@Injectable()
export class FacultyService {

  postsCol: AngularFirestoreCollection<Post>;
  posts:any;
  postDoc: AngularFirestoreDocument<Post>;

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
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          console.log(id);
          return { id, data };
        });
      });
     return this.posts;
   }
   addPost(post: Post){
    this.postsCol.add(post);
   }
   deletePost(post:Post){
    console.log(post.id);
     this.postDoc=this.afs.doc(`teachers/${post.id}`);
     this.postDoc.delete();
   }
}
