import { HttpClient, HttpResponse} from '@angular/common/http';
import { PairNumbersModel } from './pair-numbers.model';
import { Injectable } from "@angular/core";
import { DataService } from './data-service';

@Injectable()
export class PairNumbersService {

  constructor(private dataService: DataService){}



  addTwoNumbers(numberOne: number, numberTwo: number){
    return this.dataService.addTwoNumbers(numberOne,numberTwo);
  }

  subtTwoNumbers(numberOne: number, numberTwo: number){
    return this.dataService.subtTwoNumbers(numberOne,numberTwo);
  }

  mulTwoNumbers(numberOne: number, numberTwo: number){
    return this.dataService.mulTwoNumbers(numberOne,numberTwo);
  }

  divTwoNumbers(numberOne: number, numberTwo: number){
    return this.dataService.divTwoNumbers(numberOne,numberTwo);
  }

}
