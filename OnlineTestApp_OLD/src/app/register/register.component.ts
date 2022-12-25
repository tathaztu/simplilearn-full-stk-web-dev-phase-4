import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = '';
  numQuestions = null;

  strUserNameError = null;
  strNumQuestionsError = null;

  // Router
  // Angular - give me router
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleRegistration() {

    this.strUserNameError = null;
    this.strNumQuestionsError = null;
  
    console.log(this.username, this.numQuestions);
    if(this.username.trim().length == 0) {
      this.strUserNameError = 'Username required';
      document.getElementById('username').focus();
    } else if(null == this.numQuestions) {
      this.strNumQuestionsError = 'Number of Questions required';
      document.getElementById('numQuestions').focus();
    } else if (/\D/.test(this.numQuestions)) {
      this.strNumQuestionsError = 'Number of questions can only contain numbers [0-9]';
      document.getElementById('numQuestions').focus();
    } else if (parseInt(this.numQuestions) < 5) {
      this.strNumQuestionsError = 'Number of questions should be at least 5';
      document.getElementById('numQuestions').focus();
    } else {
      console.log('Will Navigate');
      this.router.navigate(['quiz', this.username, this.numQuestions])
    }
  }

}
