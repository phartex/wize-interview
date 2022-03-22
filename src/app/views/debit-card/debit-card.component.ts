import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form, Validators } from '@angular/forms';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.scss']
})
export class DebitCardComponent implements OnInit {
  cardForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const newValue : any = JSON.stringify(sessionStorage.getItem('values'));
    console.log('new value',newValue.cardNo);
    this.createForm()
  }

  createForm() {
    this.cardForm = this.fb.group({
      cardNo: ['', Validators.required],
      cardHolder: ['', Validators.required],
      expDate: ['', Validators.required],
      cvvNo: ['', Validators.required],
    });
  }



}
