import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


export class HttpErrorInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
        debugger;
        return next.handle(request)
        .pipe(catchError((error: HttpErrorResponse)=>{
            let errorMessage='';
            if(error.error instanceof ErrorEvent){
                errorMessage = `Error: ${error.error.message}`;
         } else {
           // server-side error
           errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
         }
         window.alert(errorMessage);
         return throwError(errorMessage);
            })
        )
        }
}