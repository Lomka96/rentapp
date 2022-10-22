import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarService } from './services/car.service';
import { CarListComponent } from './car-list/car-list.component';
import { HeaderComponent } from './header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DeletePopupScreenComponent } from './delete-popup-screen/delete-popup-screen.component';
import { AddPopupScreenComponent } from './add-popup-screen/add-popup-screen.component';
import { EditPopupScreenComponent } from './edit-popup-screen/edit-popup-screen.component';
import { CustomerListComponent } from './customer/customer.component';
import { RouterModule } from '@angular/router';
import { AuthPopupScreenComponent } from './auth-popup-screen/auth-popup-screen.component';
import { AddPopupScreenCustomerComponent } from './add-popup-screen-customer/add-popup-screen-customer.component';
import { DeletePopupScreenCustomerComponent } from './delete-popup-screen-customer/delete-popup-screen-customer.component';
import { EditPopupScreenCustomerComponent } from './edit-popup-screen-customer/edit-popup-screen-customer.component';
import { ChooseCarComponent } from './choose-car/choose-car.component';
import { ChoosePopupScreenComponent } from './choose-popup-screen/choose-popup-screen.component';
import { SendPopupScreenComponent } from './send-popup-screen/send-popup-screen.component';
import { AddCustomerToListComponent } from './add-customer-to-list/add-customer-to-list.component';
import { AddCarToListComponent } from './add-car-to-list/add-car-to-list.component';

const routers = [
   { path: 'cars', component: CarListComponent },
  
  { path: 'customers', component: CustomerListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    HeaderComponent,
    DeletePopupScreenComponent,
    AddPopupScreenComponent,
    EditPopupScreenComponent,
    CustomerListComponent,
    AuthPopupScreenComponent,
    AddPopupScreenCustomerComponent,
    DeletePopupScreenCustomerComponent,
    EditPopupScreenCustomerComponent,
    ChooseCarComponent,
    ChoosePopupScreenComponent,
    SendPopupScreenComponent,
    AddCustomerToListComponent,
    AddCarToListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
