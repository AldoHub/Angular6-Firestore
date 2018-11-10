import { Component, OnInit } from '@angular/core';
import {FirestoreService} from "../services/firestore.service";
//to get the param from the URL
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private firestoreService: FirestoreService, private route:ActivatedRoute) { }
  public post:any = {};
  public edit:boolean = false;

  //get the ID to pass
  public currentPostID = this.route.snapshot.paramMap.get("id");


  public getSinglePost(){
    
    this.firestoreService.getPost(this.currentPostID).subscribe((postData)=>{
      this.post = postData.payload.data();
      
    })
  }

  public enterEditMode(){
    //change the edit to true
    this.edit = true;
    console.log("Edit Mode Enabled");
  }

  public exitEditMode(){
    this.edit= false;
    console.log("Edit Mode Disabled");
  }


  ngOnInit() {
    this.getSinglePost();
  }

}
