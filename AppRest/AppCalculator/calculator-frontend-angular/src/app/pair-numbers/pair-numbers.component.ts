
import { Router, ActivatedRoute } from '@angular/router';
import { PairNumbersService } from './../pair-numbers-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pair-numbers',
  templateUrl: './pair-numbers.component.html',
  styles: [],
})
export class PairNumbersComponent implements OnInit {


  constructor(private pairNumberService: PairNumbersService,private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
  irAdd(){
    console.log("nos vamos a add")
    this.router.navigate(['./add'])
  }
  irSubt(){
    console.log("nos vamos a subt")
    this.router.navigate(['./subt'])
}
irMul(){
  console.log("nos vamos a subt")
  this.router.navigate(['./mul'])
}
irDiv(){
  console.log("nos vamos a subt")
  this.router.navigate(['./div'])
}
}
