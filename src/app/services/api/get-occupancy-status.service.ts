import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetOccupancyStatusService {
  private apiUrl = 'http://127.0.0.1:3000/parking-bay/operator/1';
  private cacheKey = 'parkingBaysCache'; // Key for localStorage

  constructor(private http: HttpClient) {}

  getParkingBays(): Observable<any> {
    const cachedData = localStorage.getItem(this.cacheKey);

    if (cachedData) {
      // Return cached data as Observable
      return of(JSON.parse(cachedData));
    } else {
      // Fetch from API, cache the response, and return the data
      return this.http.get(this.apiUrl).pipe(
        tap((data) => {
          localStorage.setItem(this.cacheKey, JSON.stringify(data));
        }),
        catchError(this.handleError),
      );
    }
  }

  preloadParkingBays(): Promise<any> {
    const cachedData = localStorage.getItem(this.cacheKey);

    if (cachedData) {
      return Promise.resolve(JSON.parse(cachedData));
    } else {
      return this.http
        .get(this.apiUrl)
        .pipe(
          tap((data) => {
            localStorage.setItem(this.cacheKey, JSON.stringify(data));
          }),
          catchError(this.handleError),
        )
        .toPromise();
    }
  }

  clearCache(): void {
    localStorage.removeItem(this.cacheKey);
    console.log('Cache cleared for parking bays');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`,
      );
    }
    return throwError('Something went wrong; please try again later.');
  }
}
