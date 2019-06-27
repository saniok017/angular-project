import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  url = 'rest/api/url';

  constructor(private http: HttpClient) {}

  verifyCredentials(data: object) {
    this.http.put(this.url, { credentials: data });
    return '404';
  }

  registerNewUser(userData: object) {
    this.http.put(this.url, { credentials: userData });
    return '404';
  }
}
