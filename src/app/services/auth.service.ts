import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(public afAuth: AngularFireAuth, public router : Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        sessionStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(sessionStorage.getItem('user'));
      } else {
        sessionStorage.setItem('user', null);
        JSON.parse(sessionStorage.getItem('user'));
      }
    })
   }

  loginUsingEmail(email: string, password: string) {
    let result : string;
    this.afAuth.signInWithEmailAndPassword(email, password).then(value => {
      this.router.navigate(['/admin','home']);
    })
      .catch(err => {
        window.alert('Something went wrong:' + err.message)
      });
  }

  logOut() {
    return this.afAuth.signOut().then(() => {
      sessionStorage.removeItem('user');
      this.router.navigate(['/admin']);
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (user !== null) ? true : false;
  }
}
