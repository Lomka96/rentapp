import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from '../interface/car';
import { CarService } from '../car.service';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

import { DeleteModalOldComponent } from '../delete-modal-old/delete-modal-old.component';
import { Dialog } from '@angular/cdk/dialog';
import { DeletePopupScreenComponent } from '../delete-popup-screen/delete-popup-screen.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  public cars: Car[] = [];
  public editCar: Car | undefined;
  public deleteCar: Car | undefined;
  
  constructor(private carService: CarService, private dialog: MatDialog) { }

  ngOnInit(): void{
    this.getCars();
  }
  
  public getCars(): void{
    this.carService.getCars().subscribe(
      (response: Car[]) => {
        this.cars = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public openDeleteModal(): void {
    this.dialog.open(DeletePopupScreenComponent);
  }

  public onAddCar(addForm: NgForm): void {
    document.getElementById('close-add-car-form')?.click();
    this.carService.saveCar(addForm.value).subscribe(
      (response: Car) => {
        console.log(response);
        this.getCars();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCar(car: Car): void {
    document.getElementById('close-edit-car-form')?.click();
    this.carService.updateCar(car).subscribe(
      (response: Car) => {
        console.log(response);
        this.getCars();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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

  public onOpenModal(mode: string, car = {} as Car): void {
    const container = document.getElementById('car-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCarModal');
    }
    if (mode === 'edit') {
      this.editCar = car;
      button.setAttribute('data-target', '#editCarModal');
    }
    if (mode === 'delete') {
      this.deleteCar = car;
      button.setAttribute('data-target', '#deleteCarModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
