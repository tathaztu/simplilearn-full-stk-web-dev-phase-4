import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Tatha';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router
  // Angular - give me router
  // DI
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username === 'Tatha' && this.password === 'OMGPassword!') {
      this.invalidLogin = false;
      this.router.navigate(['welcome'])
    } else {
      this.invalidLogin = true;      
    }
  }
}
