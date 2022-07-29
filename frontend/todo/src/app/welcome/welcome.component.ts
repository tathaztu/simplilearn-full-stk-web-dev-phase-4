import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { WelcomeDataService } from '../service/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService: string
  // Activated Route
  constructor(private route:ActivatedRoute, private welcomeDataService:WelcomeDataService) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['name']);

    this.name = this.route.snapshot.params['name'];
  }

  getCustomMessage(){
    console.log(this.welcomeDataService.executeHelloWorldService());

    // this.welcomeDataService.executeHelloWorldService().subscribe();
    // this.welcomeDataService.executeHelloWorldService().subscribe();
    this.welcomeDataService.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      // response => console.log(response)
      // response => console.log(response.message)
    );
    console.log("List line of getCustomMessage");
  }

  handleSuccessfulResponse(response) {
    // console.log(response);
    // console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    console.log(error);
    console.log("error.error: " + error.error);
    this.welcomeMessageFromService = error.error.message;
  }
}
