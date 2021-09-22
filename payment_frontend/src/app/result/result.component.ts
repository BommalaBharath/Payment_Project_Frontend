import { Component, OnInit } from '@angular/core';
import { TransactionComponent } from '../transaction/transaction.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  data:string;
  constructor(transcom:TransactionComponent) {
    this.data=transcom.m1;
    }

  ngOnInit(): void {
  }

}
