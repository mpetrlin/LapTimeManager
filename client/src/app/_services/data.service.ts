import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTopTimes() {
    return this.http.get(this.baseUrl + "getapproved");
  }

  getUnappTimes() {
    return this.http.get(this.baseUrl + "getunapproved");
  }
}
