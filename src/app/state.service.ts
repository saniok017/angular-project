import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor(private http: HttpClient) {}

  verifyCredentials(data: object) {
    this.http.put('/assets/shipping.json', { credentials: data });
    return '';
  }
}
