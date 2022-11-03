import { Router, ActivatedRoute } from '@angular/router';
import { PairNumbersService } from './../pair-numbers-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  numberOne: number = 0;
  numberTwo: number = 0;
  resultado: any;

  constructor(
    private pairNumbersService: PairNumbersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  irAdd() {
    this.pairNumbersService
      .addTwoNumbers(this.numberOne, this.numberTwo)
      .subscribe(
        (response) => {
          console.log(
            'la suma de ' +
              this.numberOne +
              ' y ' +
              this.numberTwo +
              ' es: ' +
              response
          );
          this.resultado = response;
        },
        (error) => {
          console.log('hubo un error al sumar' + error);
        }
      );
  }
  irInicio() {
    console.log('vamos al inicio');
    this.router.navigate([''])
  }
}
