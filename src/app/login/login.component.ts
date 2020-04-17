import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.frmLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formErr() { return this.frmLogin.controls; }

  login(): void {
    this.submitted = true;
    const username = this.frmLogin.value.username;
    const password = this.frmLogin.value.password;

    if (this.frmLogin.invalid) {
      return;
    }

    if (username === 'employee' && password === 'employee2020') {
      console.log('login');
      this.router.navigate(['/employee']);
    } else {
      alert('password or username invalid');
    }
  }

}
