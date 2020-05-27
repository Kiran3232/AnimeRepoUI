import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    public router: Router,
    public authService: AuthService
  ) {
   }

  ngOnInit(): void {
  }

  async onLogin(loginForm: FormGroup) {
    this.authService.loginUsingEmail(loginForm.get('username').value,loginForm.get('password').value);
  }

  doGoogleLogin(){
    
  }
}
