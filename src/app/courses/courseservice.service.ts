import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
//@Injectable is added to the service, it is because if this constructor hav any dependency it need to be
// injected internally. we r not adding this annotation to component because it itself internally calls the 
// injectable annotation

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  usersList:any;

  

  constructor(private http: HttpClient) { 
   
  }

  /* Since the return type is observable of subscribe, we should not return anything after that, if we return
  something, b4 fetching the value from the service.. return statment will get executed.. we should handle the subscribe
event at the component
  */
  // getUsersList(fn):any{
  //   this.http.get(this.url)
  //   .subscribe(response => {
  //    this.usersList=response;
  //    fn(response);
  //   });
  // }

  getUsersList(url):any{
   return this.http.get(url);
  }

  postUser(url:string,body):any{
    return this.http.post(url,body);
  }

  updateUser(url:string,body):any{
    return this.http.patch(url + '/' +body.id, JSON.stringify({name:"anbu"}));
  }

  deleteUser(url:string,param):any{
    return this.http.delete(url +'/'+param);
  }
}
