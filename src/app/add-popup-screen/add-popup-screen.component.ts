import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { NgForm } from '@angular/forms';
import { Car } from '../interface/car';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-popup-screen',
  templateUrl: './add-popup-screen.component.html',
  styleUrls: ['./add-popup-screen.component.css']
})
export class AddPopupScreenComponent implements OnInit {

  constructor(private carService: CarService,
              private dialogRef: MatDialogRef<AddPopupScreenComponent>) 
  { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  
  public addCar(addForm: NgForm): void {
    this.carService.saveCar(addForm.value);
    this.dialogRef.close();
    this.refresh();
    // window.location.reload();
  }

  // public reload(): boolean {
  //   return true;
  // }
  refresh(): void {
    window.location.reload();
}
  
}
