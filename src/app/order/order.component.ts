import { Component, OnInit } from '@angular/core';
import { DataService } from '../courses/Dataservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.get(this.url).subscribe(response =>{
      this.courseList=response;
    })
  }

  url: string ="http://localhost:8090/demo/api/courses"

  courseList:string[];
}
