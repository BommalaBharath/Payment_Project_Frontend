import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path : '', component : TransactionComponent},
  { path : 'result', component : ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
