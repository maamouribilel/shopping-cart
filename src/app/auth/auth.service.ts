import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}
  public token: string;

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.getToken();
      })
      .catch(error => console.log(error));
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(function(data) {
        console.log(data);
        this.token = data;
      });
  }
}
