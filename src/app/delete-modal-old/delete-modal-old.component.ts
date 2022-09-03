import { Component, OnInit } from '@angular/core';
import { Car } from '../interface/car';
import { CarService } from '../car.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-modal-old',
  templateUrl: './delete-modal-old.component.html',
  styleUrls: ['./delete-modal-old.component.css']
})
export class DeleteModalOldComponent implements OnInit {

  // public deleteCar: Car | undefined;
  // public cars: Car[] = [];
  
  // constructor(private carService: CarService) { }

  ngOnInit(): void {
    //this.getCars();
  }

  // public onDeleteCar(carId: number): void {
  //   document.getElementById('close-delete-car-form')?.click();
  //   this.carService.deleteCar(carId).subscribe(
  //     (response: void) => {
  //       console.log(response);
  //       this.getCars();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public getCars(): void{
  //   this.carService.getCars().subscribe(
  //     (response: Car[]) => {
  //       this.cars = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public onOpenModal(mode: string, car = {} as Car): void {
  //   const container = document.getElementById('car-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal'); 
  //   if (mode === 'delete') {
  //     this.deleteCar = car;
  //     button.setAttribute('data-target', '#deleteCarModal');
  //   }
  //   container?.appendChild(button);
  //   button.click();
  // }

}
