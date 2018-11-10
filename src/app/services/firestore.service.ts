//firestore service

import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  //create a new post
  public createPost(newPost: {title: string, content: string, cover: string}){
    return this.firestore.collection("posts").add(newPost);
  }

  //retrieve a post
  public getPost(documentID: string){
    return this.firestore.collection("posts").doc(documentID).snapshotChanges();
  }

  //retrieve all posts
  public getPosts(){
    return this.firestore.collection("posts", ref => ref.orderBy("title", "asc")).snapshotChanges();
    
   
  }

  //update a post
  public updatePost(documentID: string, data: any){
    return this.firestore.collection("posts").doc(documentID).set(data);
  }

  //delete a post
  public deletePost(documentID){
        
    this.firestore.collection("posts").doc(documentID).delete().then(()=>{
      alert("post deleted");
    }).catch(err => console.log(err));
  }

}
