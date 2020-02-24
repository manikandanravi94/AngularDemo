import { Component, OnInit } from '@angular/core';
import { DataService } from './Dataservice.service';

//@component is a decorator which need to be specified while defining the component
// 2. component need to b registered in module declaration
//{{}} is used to bind the values into the view b4 the dom is shown to user

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private dataService: DataService) {
    
   }

   private url:string="http://jsonplaceholder.typicode.com/users";

  serviceUserList:any[];
 
/* callback function is used to look for the response from the server irrespective of killing the working thread
angular function will be passed as a argument to the service layer where inside the subscribe method this 
method vl b executed*/
  // getServiceList(){
  //   this.DataServic.getUsersList((userList) => {
  //     this.serviceUserList=userList;
  //   });
  //   }

  getServiceList(){
    this.dataService.get(this.url).subscribe(response =>{
      this.serviceUserList=response;
    });
    }
    /*
    adding the user into the list of user example.. since the service is for demo purpose, 
    we can use that value for testing.. it will work only during that instance
     since we are using the array to show list.. we are using push method to insert value

    */
    postUser(input:HTMLInputElement){
      let post={title: input.value};
      let postResponse=this.dataService
.post(this.url,JSON.stringify(post));
      postResponse.subscribe(response=>{
        post['name']=response.id;
        this.serviceUserList.splice(0,0,post);
      })
    }

    updateUser(postObj){
      let updateResponse=this.dataService
.update(this.url,postObj);
      updateResponse.subscribe(response =>{
        console.log(response);
      })
    }

    deleteUser(postObj){
     this.dataService
.delete(this.url,postObj.id).subscribe(response =>{
       console.log(response);
       let index = this.serviceUserList.indexOf(postObj);
       this.serviceUserList.splice(index,1)
     })
    }

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
