import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PairNumbersService } from '../pair-numbers-service';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styles: [
  ]
})
export class DivComponent implements OnInit {
  numberOne: number = 0;
  numberTwo: number = 0;
  resultado: any;

  constructor(
    private pairNumbersService: PairNumbersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}


  irDiv() {
    this.pairNumbersService.divTwoNumbers(this.numberOne, this.numberTwo).subscribe((response)=>{
      console.log("la division de " + this.numberOne + " entre " + this.numberTwo + " es " + response);
      this.resultado = response;
    },(error)=>{
      console.log("hubo un error al calcular la division")
    })
  }
  irInicio() {
    console.log('vamos al inicio');
    this.router.navigate([''])
  }

}
