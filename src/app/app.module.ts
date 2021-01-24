import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DynamicFormBindingComponent } from './dynamic-form-binding/dynamic-form-binding.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {HttpClientModule} from '@angular/common/http';
import { DynamicFormQuestionComponent } from './dynamic-form-question-component/dynamic-form-question.component';
import { QuestionService } from './service/question.service';
import { QuestionControlService } from './service/question-control.service';
@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    DynamicFormBindingComponent,
    ReactiveFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [QuestionService,QuestionControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
