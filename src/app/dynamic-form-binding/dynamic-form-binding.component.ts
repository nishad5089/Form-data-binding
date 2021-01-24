import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { QuestionBase } from '../model/question-base';
import { QuestionControlService } from '../service/question-control.service';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-dynamic-form-binding',
  templateUrl: './dynamic-form-binding.component.html',
  styleUrls: ['./dynamic-form-binding.component.scss']
})
export class DynamicFormBindingComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService,service: QuestionService) { 
     service.getQuestions().subscribe(res=>{
        this.questions = res;
    });
   }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }



  // constructor() {
   
  // }

}
