import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirePerformance } from '@angular/fire/performance';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(public afAuth: AngularFireAuth, public router : Router, private perf: AngularFirePerformance) {
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
    this.afAuth.signInWithEmailAndPassword(email, password).then(value => {
      this.perf.trace('Login Using Email');
      this.userData = value.user;
      sessionStorage.setItem('user', JSON.stringify(this.userData));
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
