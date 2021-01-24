import { Car } from "../model/car";

export class CarService {
    getList() {
        return [
            {"name": "Toyota", "motor": "petrol", "hasSunroof": true},
            {"name": "Tesla", "motor": "petrol", "hasSunroof": false},
            {"name": "Audi R8", "motor": "diesel", "hasSunroof": false},
        ];
    }

    getCar(id: number) {
        return this.getList()[id];
    }

    saveCar(car: Car) {
        // show
        this.getList().push(car);       
    }
}