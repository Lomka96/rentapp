import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Car } from "./interface/car";

@Injectable({providedIn: 'root'})
export class CarService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiServerUrl}/cars/list`);
  }

  public getCar(carId: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiServerUrl}/cars/get/${carId}`);
  }
    
  public saveCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.apiServerUrl}/cars/save`, car);
  }

  public updateCar(car: Car): Observable<Car> {
    return this.http.patch<Car>(`${this.apiServerUrl}/cars/update`, car);
  }

  public deleteCar(carId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/cars/delete/${carId}`);
  }
}