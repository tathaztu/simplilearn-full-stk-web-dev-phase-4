import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { Question } from '../quiz/quiz.component';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  arrQsObj: Question[];

  constructor(private activatedRoute: ActivatedRoute) { 
    console.log("Printing from Score: " + this.activatedRoute.snapshot.params['arrQuestions']);
    console.log("Printing parsed object from Score: " + JSON.parse(this.activatedRoute.snapshot.params['arrQuestions']));
    this.arrQsObj =  JSON.parse(this.activatedRoute.snapshot.params['arrQuestions']);
    
    this.arrQsObj.forEach(qsObj => {
      console.log("num1: " + qsObj.nNum1 + ", num2: " + qsObj.nNum2 + ", answer: " + qsObj.nAnswer);  
    });
  }

  ngOnInit() {
  }

  isAnsweredCorrectly(qsObj: Question) {
    return qsObj.nAnswer == qsObj.nNum1 + qsObj.nNum2;
  }

  getTotalScore(){
    let nScore = 0;

    this.arrQsObj.forEach(qsObj => {
      if(this.isAnsweredCorrectly(qsObj)){
        nScore++;
      }   
    });

    return nScore + "/" + this.arrQsObj.length;
  }

}
