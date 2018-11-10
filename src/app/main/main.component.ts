import { Component, OnInit } from '@angular/core';
//import service
import {FirestoreService} from "../services/firestore.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public posts = [];
 
  
  constructor(private firestoreService: FirestoreService) { }

  public getPosts(){
    this.firestoreService.getPosts().subscribe((posts) => {
      posts.map((post) => {
        this.posts.push({
          id: post.payload.doc.id,
          data: post.payload.doc.data()
        })
      })
    });
    console.log(this.posts);
    
  }



  ngOnInit() {
   this.getPosts();

  }

}
