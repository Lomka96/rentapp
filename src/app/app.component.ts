import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from './interface/car';
import { Customer } from './interface/customer';
import { CarService } from './services/car.service';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public cars: Car[] = [];
  public customers: Customer[] = [];
  constructor(private carService: CarService, private customerService: CustomerService) { }

  ngOnInit(): void{
    this.getCars();
    this.getCustomers();
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

  public getCustomers(): void{
    this.customerService.getCustomers().subscribe(
      (response: Customer[]) => {
        this.customers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
