import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
counter: number = 0
  constructor( private store : Store) { }

  ngOnInit(): void {
  }

  onIncrement(){

  }
  onDecrement(){

  }

  onReset(){

  }
}
