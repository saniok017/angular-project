import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  url = 'rest/api/url';

  constructor(private http: HttpClient) {}

  checkOnEquality(newRequest: object, oldRequest: object) {
    return Object.entries(newRequest).every(currentarray => {
      return currentarray[1] === oldRequest[currentarray[0]];
    });
  }

  verifyCredentials(data: object) {
    this.http.put(this.url, { credentials: data });
    return '404';
  }

  registerNewUser(userData: object) {
    this.http.put(this.url, { credentials: userData });
    return '404';
  }
}
