import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from '../interface/car';
import { CarService } from '../services/car.service';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

import { Dialog } from '@angular/cdk/dialog';
import { DeletePopupScreenComponent } from '../delete-popup-screen/delete-popup-screen.component';
import { AddPopupScreenComponent } from '../add-popup-screen/add-popup-screen.component';
import { EditPopupScreenComponent } from '../edit-popup-screen/edit-popup-screen.component';
import { ChoosePopupScreenComponent } from '../choose-popup-screen/choose-popup-screen.component';
import { AddCustomerToListComponent } from '../add-customer-to-list/add-customer-to-list.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  public cars: Car[] = [];
  isAuthorized = false;

  constructor(private carService: CarService, private dialog: MatDialog) { }

  ngOnInit(): void{
    this.getCars();
    if (localStorage.getItem('Authorized') === 'true') {
      this.isAuthorized = true;
    }
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

  public openDeleteModal(carId: number): void {
    this.dialog.open(DeletePopupScreenComponent, {
      data: {
        carId: carId
      }
    });
  }

  public openAddCarModal(): void {
    this.dialog.open(AddPopupScreenComponent);
  }

  public openEditCarModal(car: Car): void {
    this.dialog.open(EditPopupScreenComponent, {
      data: {
        car: car
      }
    });
  }

  public openChooseCarModal(): void {
    this.dialog.open(ChoosePopupScreenComponent, {
    });
  }

  public openAddCustomerToListModal(): void {
    this.dialog.open(AddCustomerToListComponent, {
    });
  }
}
