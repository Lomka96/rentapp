import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddPopupScreenComponent } from '../add-popup-screen/add-popup-screen.component';
import { Car } from '../interface/car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-edit-popup-screen',
  templateUrl: './edit-popup-screen.component.html',
  styleUrls: ['./edit-popup-screen.component.css']
})
export class EditPopupScreenComponent implements OnInit {

  public car: Car;

  constructor(private carService: CarService,
    private dialogRef: MatDialogRef<EditPopupScreenComponent>, @Inject(MAT_DIALOG_DATA) data) {
      this.car = data.car;
     }

  ngOnInit(): void {
  }

  public updateCar(editForm: NgForm): void {
    this.carService.updateCar(editForm.value);
    this.dialogRef.close();
    window.location.reload();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
