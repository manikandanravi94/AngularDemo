import { HttpHeaders } from '@angular/common/http';

export interface ServiceParam {

    url:String;
    queryParam:any;
    headers: HttpHeaders[];
}