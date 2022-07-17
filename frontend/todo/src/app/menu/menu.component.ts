import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn: boolean = false;

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    console.log("Menu Component - ngOnInit Called");
    // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

  // isUserLoggedIn(){
  //   return this.hardcodedAuthenticationService.isUserLoggedIn();
  // }
}
