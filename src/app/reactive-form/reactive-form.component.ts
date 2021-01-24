import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: []
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  example = { first: "", last: "" };

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      first: "",
      last: ""
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
