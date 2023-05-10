import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: any;
  testVal: any;
  isShow: boolean = false;
  regex = new RegExp('[a-z0-9]+@gmail.com');

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  emailValue() {
    let getEmailVal = this.loginForm.get('emailId').value;
    if (getEmailVal && getEmailVal !== null) {
      // this.isShow = true;
    }
    else {
      //this.isShow = false;
    }
  }

  getOtp($event) {
    let getEmailVal = this.loginForm.get('emailId').value
    if (getEmailVal) {
      this.isShow = true;
    }
    else {
      this.isShow = false;
    }

  }

  onCancel() {
    this.isShow = false;
    this.loginForm.reset();
  }

  createForm() {
    this.loginForm = this._fb.group({
      emailId: ['', Validators.compose([Validators.required])],
      otp: ['', Validators.compose([Validators.required])]
    });
  }
}