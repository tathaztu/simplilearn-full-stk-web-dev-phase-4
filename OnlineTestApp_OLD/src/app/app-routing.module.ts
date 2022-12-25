import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {path: '',                                            component:RegisterComponent},
  {path: 'register',                                    component:RegisterComponent},
  {path: 'quiz/:userName/:numQuestions',                component:QuizComponent},
  {path: 'score/:arrQuestions/:userName/:numQuestions', component:ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
