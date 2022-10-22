import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarService } from '../services/car.service';


@Component({
  selector: 'app-delete-popup-screen',
  templateUrl: './delete-popup-screen.component.html',
  styleUrls: ['./delete-popup-screen.component.css']
})
export class DeletePopupScreenComponent implements OnInit {

  private carId: any;

  constructor(private dialogRef: MatDialogRef<DeletePopupScreenComponent>, @Inject(MAT_DIALOG_DATA) data, 
    private carService: CarService) {
    this.carId = data.carId;
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  deleteCar() {
    this.carService.deleteCar(this.carId);
    this.dialogRef.close();
    window.location.reload();
  }

}
