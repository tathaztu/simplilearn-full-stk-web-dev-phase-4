import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../quiz/quiz.component';

@Injectable({
  providedIn: 'root'
})
export class QnaService {

  constructor(private httpClient:HttpClient) { }

  getQuestions(nCount){
    console.log('Calling Service')
    return this.httpClient.get<Question[]>(`http://localhost:8080/questions/${nCount}`);
  }
}
