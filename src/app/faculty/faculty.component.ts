import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post{
name: string;
teaches: string;
url: string;    
}

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {


  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  constructor(private afs: AngularFirestore) {

   }

  ngOnInit() {
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

}
