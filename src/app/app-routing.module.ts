import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//import the components
import {MainComponent} from "./main/main.component";
import {AddPostComponent} from "./add-post/add-post.component";
import {SinglePostComponent} from "./single-post/single-post.component";


//create the routes
const routes: Routes = [
    //paths
    {path:"", component: MainComponent },
    {path:"add", component: AddPostComponent},
    {path:"post/:id", component: SinglePostComponent},
  

]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
