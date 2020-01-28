import { Component, OnInit } from '@angular/core';
import { CourseService } from './courseservice.service';

//@component is a decorator which need to be specified while defining the component
// 2. component need to b registered in module declaration
//{{}} is used to bind the values into the view b4 the dom is shown to user

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(courseService: CourseService) {
    this.serviceCourse=courseService.getCourses();
   }

  serviceCourse:string[];

  ngOnInit() {
  }

  coursetitle='interpolation works by injecting the content into the dom b4 it s being displayed';

  courses=['Angular','java','oracle'];

  colSpan=2;

  isActive=true;

  email='awesomedeveloper@mani.com';

  summary="this is to show that the custom pipes can be created to modify our data view";

  post={
    title:"dynamic componet",
    favourite: true
  };

  onSave($event)
  {
    // event always bubble to the next event. if yu want to stop the event to proceed further
    // we need to use the below method
    $event.stopPropagation();
    console.log("button was clicked");
  }

  onKeyUp(userName){
    console.log("tab is clicked"+userName);
  }

  verifyEmail(){
    console.log("Email entered"+this.email);
  }

  onEmitEvent(selectedStatus:boolean){
   console.log("emitted value from favourite component"+selectedStatus);
  }

}
