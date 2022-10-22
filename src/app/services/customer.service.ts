import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Customer } from "../interface/customer";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class CustomerService {
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

  public getCustomers(): Observable<Customer[]> {
    this.setToken();
    return this.http.get<Customer[]>(`${this.apiServerUrl}/customers`, this.header);
  }

  public getCustomer(id: number): Observable<Customer> {
    this.setToken();
    return this.http.get<Customer>(`${this.apiServerUrl}/customers/${id}`, this.header);
  }
    
  public saveCustomer(customer: Customer): void {
    this.setToken();
    this.http.post<Customer>(`${this.apiServerUrl}/customers`, customer, this.header).subscribe();
  }

  public updateCustomer(customer: Customer): void {
    this.setToken();
    this.http.patch<Customer>(`${this.apiServerUrl}/customers/${customer.id}`, customer, this.header).subscribe();
  }

  public deleteCustomer(id: number): void {
    this.setToken();
    this.http.delete(`${this.apiServerUrl}/customers/${id}`, this.header).subscribe();
  }
}