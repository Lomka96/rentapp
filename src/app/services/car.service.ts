import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Car } from "../interface/car";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class CarService {
  private apiServerUrl = environment.apiBaseUrl;

  header = {};

  constructor(private http: HttpClient, authService: AuthService) { 
  }

  private setToken(): void {
    this.header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${localStorage.getItem('Token')}`)
    };
  }

  public getCars(): Observable<Car[]> {
    this.setToken();
    return this.http.get<Car[]>(`${this.apiServerUrl}/cars`, this.header);
  }

  public getCar(carId: number): Observable<Car> {
    this.setToken();
    return this.http.get<Car>(`${this.apiServerUrl}/cars/${carId}`, this.header);
  }
    
  public saveCar(car: Car): void {
    this.setToken();
    this.http.post<Car>(`${this.apiServerUrl}/cars`, car, this.header).subscribe();
  }

  public updateCar(car: Car): void {
    this.setToken();
    this.http.patch<Car>(`${this.apiServerUrl}/cars/${car.id}`, car, this.header).subscribe();
  }

  public deleteCar(carId: number): void {
    this.setToken();
    this.http.delete(`${this.apiServerUrl}/cars/${carId}`, this.header).subscribe();
  }
}