import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from "@angular/forms";

//import the firestoreService
import {FirestoreService} from "../services/firestore.service";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  //create the form
  public postsForm = new FormGroup({
    title: new FormControl('', Validators.required),
    cover: new FormControl('',  Validators.required),
    content: new FormControl('',  Validators.required),
   
  });
  

  constructor(private firestoreService: FirestoreService) {
    
  }

  public addPost(formData){
   
      //ready to submit new data
      //assign the form data to the new object
      let data  = {
        title: formData.title,
        content: formData.content,
        cover: formData.cover,
      }
     this.firestoreService.createPost(data)
     .then( () => {
      this.postsForm.setValue({
        title: '',
        cover: '',
        content: ''
      });
     });
  

  }

  ngOnInit() {
  }

}
