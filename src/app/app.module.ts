import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './courses/courseservice.service';
import { SummaryPipe } from './Custompipes/SummaryPipe';
import { FavouriteComponent } from './courses/favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,SummaryPipe, FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
