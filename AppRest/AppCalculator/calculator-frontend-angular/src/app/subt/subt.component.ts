import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PairNumbersService } from '../pair-numbers-service';

@Component({
  selector: 'app-subt',
  templateUrl: './subt.component.html',
  styles: [
  ]
})
export class SubtComponent implements OnInit {
  numberOne: number = 0;
  numberTwo: number = 0;
  resultado: any;

  constructor(
    private pairNumbersService: PairNumbersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}


  irSubt() {
    this.pairNumbersService.subtTwoNumbers(this.numberOne, this.numberTwo).subscribe((response)=>{
      console.log("la resta de " + this.numberOne + " y " + this.numberTwo + " es " + response);
      this.resultado = response;
    },(error)=>{
      console.log("hubo un error al calcular la resta")
    })
  }
  irInicio() {
    console.log('vamos al inicio');
    this.router.navigate([''])
  }
}
