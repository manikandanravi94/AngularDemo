import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ServiceParam } from '../common/serviceParam';
//@Injectable is added to the service, it is because if this constructor hav any dependency it need to be
// injected internally. we r not adding this annotation to component because it itself internally calls the 
// injectable annotation

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http: HttpClient) { 
   
  }

  /* Since the return type is observable of subscribe, we should not return anything after that, if we return
  something, b4 fetching the value from the service.. return statment will get executed.. we should handle the subscribe
event at the component
  */
  // getMethod(fn):any{
  //   this.http.get(this.url)
  //   .subscribe(response => {
  //    this.usersList=response;
  //    fn(response);
  //   });
  // }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  get(url,serviceParam?:ServiceParam):any{
    /*below commented can be applied to each service specifically not to all the service commonly and 
     hence this is not a proper way of coding,we can achieve the common way by httpinterceptor
   return this.http.get(url).pipe(retry(1),catchError(this.handleError));
     */
   let httpGetOption = {
      headers: new HttpHeaders({
        
      })
    };
    let headers=serviceParam.headers;
    return this.http.get(url,httpGetOption);
  }

  post(url:string,body):any{
    return this.http.post(url,body,this.httpOptions);
  }
  handleError(error: any): any {
    let errorMessage='';
    if(error.error instanceof ErrorEvent)
{
  errorMessage='Error: ${error.error.message}';
}
else{
  errorMessage='Error code: ${error.status}\nMessage: ${error.message}';
}
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  update(url:string,body):any{
    return this.http.patch(url + '/' +body.id, JSON.stringify({name:"anbu"}));
  }

  delete(url:string,param):any{
    return this.http.delete(url +'/'+param);
  }
}
