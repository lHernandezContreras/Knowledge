import { HttpClient, HttpResponse} from '@angular/common/http';
import { PairNumbersModel } from './pair-numbers.model';
import { Injectable } from "@angular/core";
@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  urlBase="http://localhost:8080/backend-calculator";


  addTwoNumbers(numberOne: number, numberTwo: number){
    let url: string;
    url = this.urlBase + "/webservice/calculator/add/" + numberOne + "/" + numberTwo;
    return this.httpClient.get(url)
      ;
  }
  subtTwoNumbers(numberOne: number, numberTwo: number){
    let url: string;
    url = this.urlBase + "/webservice/calculator/subt/" + numberOne + "/" + numberTwo;
    return this.httpClient.get(url)
  }
  mulTwoNumbers(numberOne: number, numberTwo: number){
    let url: string;
    url = this.urlBase + "/webservice/calculator/mul/" + numberOne + "/" + numberTwo;
    return this.httpClient.get(url)
  }
  divTwoNumbers(numberOne: number, numberTwo: number){
    let url: string;
    url = this.urlBase + "/webservice/calculator/div/" + numberOne + "/" + numberTwo;
    return this.httpClient.get(url)
  }
}
