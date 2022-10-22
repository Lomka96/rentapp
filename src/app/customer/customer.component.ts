import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupScreenComponent } from '../delete-popup-screen/delete-popup-screen.component';
import { AddPopupScreenComponent } from '../add-popup-screen/add-popup-screen.component';
import { EditPopupScreenComponent } from '../edit-popup-screen/edit-popup-screen.component';
import { Customer } from '../interface/customer';
import { CustomerService } from '../services/customer.service';
import { AddPopupScreenCustomerComponent } from '../add-popup-screen-customer/add-popup-screen-customer.component';
import { DeletePopupScreenCustomerComponent } from '../delete-popup-screen-customer/delete-popup-screen-customer.component';
import { EditPopupScreenCustomerComponent } from '../edit-popup-screen-customer/edit-popup-screen-customer.component';
import { AddCarToListComponent } from '../add-car-to-list/add-car-to-list.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerListComponent implements OnInit {

  public customers: Customer[] = [];
  isAuthorized = false;

  constructor(private customerService: CustomerService, private dialog: MatDialog) { }

  ngOnInit(): void{
    this.getCustomers();
    if (localStorage.getItem('Authorized') === 'true') {
      this.isAuthorized = true;
    }
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

  public openDeleteModal(id: number): void {
    this.dialog.open(DeletePopupScreenCustomerComponent, {
      data: {
        id: id
      }
    });
  }

  public openAddCustomerModal(): void {
    this.dialog.open(AddPopupScreenCustomerComponent);
  }

  public openEditCustomerModal(customer: Customer): void {
    this.dialog.open(EditPopupScreenCustomerComponent, {
      data: {
        customer: customer
      }
    });
  }

  public openAddCarToListModal(): void {
    this.dialog.open(AddCarToListComponent, {
    });
  }
}
