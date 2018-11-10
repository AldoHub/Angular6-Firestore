import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

//import the form modules
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//firebase / firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
//env file with firebase credentials
import { environment } from '../environments/environment';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { AppRoutingModule } from './/app-routing.module';
 

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddPostComponent,
    UpdatePostComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
