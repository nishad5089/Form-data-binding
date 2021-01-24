import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './model/car';
import { QuestionBase } from './model/question-base';
import { QuestionService } from './service/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'car model';

  // motors = ['petrol', 'electric', 'unknown'];

  // carModel = new Car(1, '', '', false);

  // submitted = false;

  // onSubmit(){
  //   this.submitted = true;
  // }

  //  getCurrentModel() { 
  //   return JSON.stringify(this.carModel); 
  // }

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
