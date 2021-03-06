import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { DataService } from './courses/Dataservice.service';
import { SummaryPipe } from './Custompipes/SummaryPipe';
import { FavouriteComponent } from './courses/favourite/favourite.component';
import { InputformatDirective } from './directives/inputformat.directive';
import { SignupFormComponentComponent } from './signup-form-component/signup-form-component.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './common/httpErrorInterceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FollowerComponent } from './follower/follower.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { Authguard } from './common/authguard.service';
import { Adminauthguard } from './common/adminauthguard.service';
import { NoaccessComponent } from './noaccess/noaccess.component';
import { FooterComponent } from './footer/footer.component';
import { DeveloperprofileComponent } from './developerprofile/developerprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,SummaryPipe, FavouriteComponent, InputformatDirective, SignupFormComponentComponent, NotFoundComponent, HeaderComponent, FollowerComponent, GithubprofileComponent, LoginComponent, HomeComponent, OrderComponent, NoaccessComponent, FooterComponent, DeveloperprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },Authguard,Adminauthguard],
  bootstrap: [AppComponent]
})
export class AppModule { }
