import { Component, OnInit, Input } from '@angular/core';

import {FormGroup, FormControl, Validators } from "@angular/forms";
import {Router} from "@angular/router";

//import the firestoreService
import {FirestoreService} from "../services/firestore.service";



@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})


export class UpdatePostComponent implements OnInit {

  

  //create the form
  public updatePostsForm = new FormGroup({
    title: new FormControl('', Validators.required),
    cover: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
   
  });

  constructor(private firestoreService: FirestoreService, private router: Router) {
   }

 
  //set values manually for the form
   public getFormValues(){
     this.firestoreService.getPost(this.currentPostID).subscribe((post)=>{
      this.updatePostsForm.setValue({
        title: post.payload.data()["title"],
        cover: post.payload.data()["cover"],
        content: post.payload.data()["content"]
      });
     });
   }

   

  //get the ID of the current post
  @Input() currentPostID;
 
  //call the services update method
  public updatePost(formData){
    let data  = {
  
      title: formData.title,
      content: formData.content,
      cover: formData.cover,
    }
    this.firestoreService.updatePost(this.currentPostID, data).then(() => {
     alert("post updated");
    });

  }

  public delete(){
    let propmtMessage = confirm("Are you sure?");
    
    if(propmtMessage){
      this.firestoreService.deletePost(this.currentPostID);
      this.router.navigate(['/']);
    }else{
      alert("no changes were made");
    }
    
   
  }



  ngOnInit() {
    this.getFormValues();
     }

}
