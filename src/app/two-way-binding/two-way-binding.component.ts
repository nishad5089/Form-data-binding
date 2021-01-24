import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: []
})
export class TwoWayBindingComponent implements OnInit {
  ngOnInit(): void {
  }

  title = 'car model';

  motors = ['petrol', 'electric', 'unknown'];

  carModel = new Car(1, '', '', false);

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

   getCurrentModel() { 
    return JSON.stringify(this.carModel); 
  }
}
