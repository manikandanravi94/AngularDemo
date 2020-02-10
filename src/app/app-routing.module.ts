import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { SignupFormComponentComponent } from './signup-form-component/signup-form-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FollowerComponent } from './follower/follower.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';

const routes: Routes = [
  {
    path:"", component: CoursesComponent
  },
  {
    path: "courses", component: CoursesComponent
  },
  {
    path: "signup", component: SignupFormComponentComponent
  },
  {
    path: "follower/:course", component: FollowerComponent
  },
  {
    path: "githubprofile", component: GithubprofileComponent
  },  
  {
    path: "**", component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
