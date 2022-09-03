import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarService } from './car.service';
import { CarListComponent } from './car-list/car-list.component';
import { HeaderComponent } from './header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteModalOldComponent } from './delete-modal-old/delete-modal-old.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DeletePopupScreenComponent } from './delete-popup-screen/delete-popup-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    HeaderComponent,
    DeleteModalOldComponent,
    DeletePopupScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
