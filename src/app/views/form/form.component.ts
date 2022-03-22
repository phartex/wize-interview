import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  debitForm!: FormGroup;
  transferValue: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.debitForm = this.fb.group({
      cardNo: ['', Validators.required],
      cardHolder: ['', Validators.required],
      expDate: ['', Validators.required],
      cvvNo: ['', Validators.required],
    });
  }

  submitForm(){
    console.log(this.debitForm.value)
    this.transferValue = this.debitForm.value;

    sessionStorage.setItem('values',JSON.stringify(this.debitForm.value))
  }
}
