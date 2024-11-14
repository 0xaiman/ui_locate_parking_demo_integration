import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FindMyCarService {
  constructor(private http: HttpClient) {}

  apiUrl = `http://127.0.0.1:3000/vehicle/licensePlate`;

  findMyCar(licensePlate: string) {
    // Append the licensePlate as a query parameter to the URL
    const url = `${this.apiUrl}/${licensePlate}`;

    // Make the HTTP GET request with the query parameter
    return this.http.get(url);
  }
}
