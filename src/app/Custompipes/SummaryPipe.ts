import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
name: "SummaryPipe"
}
)
export class SummaryPipe implements PipeTransform{
  
    transform(value: string, length?: number){
 
        if(!value)
        return null;
        let endIndex= (length<0)?5:length;
        return value.substr(0,endIndex)+"...";
        

    }

}