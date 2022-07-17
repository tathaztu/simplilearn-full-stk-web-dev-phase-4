import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('Before Login ' + this.isUserLoggedIn());
    if (username === 'Tatha' && password === 'OMGPassword!'){
      // Save data to sessionStorage
      sessionStorage.setItem('authenticatedUser', username);
      console.log('After Login ' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return (null != user);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
