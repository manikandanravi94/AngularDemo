import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
/*  If we want to subscribe to multiple observables we can use combinelatest through which 
subscribe and get the result
 
*/ 
combineLatest([
  this.route.paramMap,
  this.route.queryParamMap
]).subscribe(combined =>{
  this.course=combined[0].get('course');
  let page=combined[1].get('page');
  if("java"===this.course){
    this.coursesFollowers=this.javaFollowers;
    console.log(page);
  }
  else{
    this.coursesFollowers=this.pythonFollowers;
  }
})
  }
   course:string;
  coursesFollowers:any[];
   javaFollowers: any[]=[{"id":"1", "name":"Manikandan","url":"https://github.com/manikandanravi94/AngularDemo"},{"id":"2", "name":"Anbu"},{"id":"3", "name":"Madhav"}];
   pythonFollowers: any[]=[{"id":"1", "name":"Arun"},{"id":"2", "name":"rajesh"},{"id":"3", "name":"mohan"}];

}
