import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
count! : Observable<any>
  constructor(private store : Store) { }

  ngOnInit(): void {
    this.store.select((state: any)=> state.counter).subscribe((value)=>{
      this.count = value.counter;
    })
  }



}
