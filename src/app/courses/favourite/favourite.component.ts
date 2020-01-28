import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input("isFavourite") isSelected:boolean;

  @Output() change = new EventEmitter();
//'angular','java'
  courses=['angular','java'];

   methodList=[{id:1, name:"Email"},{id:2, name:"Mobile"}];

   countryList=[{id:1, name:"INDIA"},{id:2, name:"USA"}];

  courseArray:any;

  viewMode='map';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isSelected=!this.isSelected;
    this.change.emit(this.isSelected);
  }

  getCourses(){
    this.courseArray=[{id:1, name:'angular'},{id:2, name:'java'},{id:3, name:'oracle'}];
  }

  addCourses(){
    this.courseArray.push({id:4, name:'python'});
  }

  updateCourses(){
    this.courseArray.splice(1);
  }

  trackCourses(index, course){
  return course ? course.id:undefined;
  }

  log(firstName){
    console.log(firstName);
  }

  submit(f)
{
  console.log(f);
}
}
