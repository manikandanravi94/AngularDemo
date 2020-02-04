import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './courses/courseservice.service';
import { SummaryPipe } from './Custompipes/SummaryPipe';
import { FavouriteComponent } from './courses/favourite/favourite.component';
import { InputformatDirective } from './directives/inputformat.directive';
import { SignupFormComponentComponent } from './signup-form-component/signup-form-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,SummaryPipe, FavouriteComponent, InputformatDirective, SignupFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
