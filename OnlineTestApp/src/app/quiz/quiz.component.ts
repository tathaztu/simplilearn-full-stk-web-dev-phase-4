import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QnaService } from '../service/qna.service';

export class Question {
  public nAnswer;

  constructor(
    public nNum1: number,
    public nNum2: number,
    public arrAnswers: number []
  ) {  }

}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  userName = null;
  numQuestions = 0;
  arrQuestions = null;
  nCurrentQuestionIdx = 0;

  timeLimit: number = 15;
  
  

  countdown: number = this.timeLimit;

  interval = null;

  // Activated Route -> Read Parameters used during navigation
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private qnaService: QnaService
  ) { }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.numQuestions = this.activatedRoute.snapshot.params['numQuestions'];
    console.log("Quiz Component - " + this.userName + " | " + this.numQuestions);
    
    this.qnaService.getQuestions(this.numQuestions).subscribe(
      response => {
        console.log(response);
        this.arrQuestions = response;
        
      }
    )
  }

  ngAfterViewInit(){
    clearInterval(this.interval);
    this.startTimer();
  }

  getCurrentQuestion() {
    if(null == this.arrQuestions) {
      return null;
    } else {
      return this.arrQuestions[this.nCurrentQuestionIdx];
    }
  }

  processAnswer(nAnswerIdx: number){
    let question:Question = this.getCurrentQuestion();
    question.nAnswer = question.arrAnswers[nAnswerIdx];
    
    console.log("you answered " + question.nAnswer);

    this.move2NextQuestion();
  }

  move2NextQuestion() {
    if(this.nCurrentQuestionIdx < this.arrQuestions.length - 1){
      this.nCurrentQuestionIdx++;
      this.resetTimer();
    } else {
      clearInterval(this.interval);
      console.log('No more questions');
      this.router.navigate(['score', JSON.stringify(this.arrQuestions), this.userName, this.numQuestions]);
    }
  }



  startTimer() {
    this.interval = setInterval(() => {
      if (this.countdown > 1) {
        this.countdown--;
        this.setTimerValue();
      } else {
        this.move2NextQuestion();
      }
    }, 1000);
  }

  setTimerValue(){
    var countdownNumberEl = document.getElementById('countdownNumber');
    countdownNumberEl.innerHTML = this.countdown.toString();
  }

  resetTimer() {
    clearInterval(this.interval);
    this.countdown = this.timeLimit;
    this.setTimerValue();
    this.startTimer();
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
