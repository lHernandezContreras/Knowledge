import { DivComponent } from './div/div.component';
import { MulComponent } from './mul/mul.component';
import { SubtComponent } from './subt/subt.component';
import { PairNumbersComponent } from './pair-numbers/pair-numbers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', component: PairNumbersComponent },
  { path: 'add', component: AddComponent },
  {path: 'subt', component: SubtComponent},
  {path: 'mul', component: MulComponent},
  {path: 'div', component: DivComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
