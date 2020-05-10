import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  errorMessage: string;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: FormGroup) {
    if (loginForm.value.username === 'admin' && loginForm.value.password === 'admin') {
      this.router.navigateByUrl('/admin/home')
    }
    else {
      this.errorMessage = 'Please Check The Login Details!';
    }
  }
}
