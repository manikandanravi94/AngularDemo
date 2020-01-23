import { Injectable } from '@angular/core';

//@Injectable is added to the service, it is because if this constructor hav any dependency it need to be
// injected internally. we r not adding this annotation to component because it itself internally calls the 
// injectable annotation

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(){
    return ['angular','java','oracle'];
  }
}
