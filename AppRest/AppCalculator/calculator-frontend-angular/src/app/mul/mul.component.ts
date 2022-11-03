import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PairNumbersService } from '../pair-numbers-service';

@Component({
  selector: 'app-mul',
  templateUrl: './mul.component.html',
  styles: [
  ]
})
export class MulComponent implements OnInit {
  numberOne: number = 0;
  numberTwo: number = 0;
  resultado: any;

  constructor(
    private pairNumbersService: PairNumbersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}


  irMul() {
    this.pairNumbersService.mulTwoNumbers(this.numberOne, this.numberTwo).subscribe((response)=>{
      console.log("el producto de " + this.numberOne + " y " + this.numberTwo + " es " + response);
      this.resultado = response;
    },(error)=>{
      console.log("hubo un error al calcular el producto")
    })
  }
  irInicio() {
    console.log('vamos al inicio');
    this.router.navigate([''])
  }
}
