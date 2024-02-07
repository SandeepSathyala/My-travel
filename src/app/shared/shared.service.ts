import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


export class Flight {
  from?: string;
  to?: string;
  date?: number;
  twowaydate?: number;
  twoway?: string;
  Oneway?: string;
}


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  url = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }


  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  SearchFlights(data: any): Observable<Flight> {
    console.log("");

    return this._http.post<Flight>(this.url + '/flights', JSON.stringify(data), this.httpHeader)

  }
  getTasks(): Observable<Flight[]> {

    return this._http.get<Flight[]>(this.url + '/flights', this.httpHeader);
  }




}
