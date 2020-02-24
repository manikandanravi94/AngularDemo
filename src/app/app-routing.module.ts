import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { SignupFormComponentComponent } from './signup-form-component/signup-form-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FollowerComponent } from './follower/follower.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path:"", component: HeaderComponent
  },
  {
    path:"home", component: HomeComponent
  },
  {
    path: "courses", component: CoursesComponent
  },
  {
    path:"order", component:OrderComponent
  },
  {
    path: "signup", component: SignupFormComponentComponent
  },
  {
    path:"login", component: LoginComponent
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
