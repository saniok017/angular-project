import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface validationResponse {
  verified: Boolean;
  error: string;
  data: object;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  url: string = '/api/url';
  restApiPublicKey: string = 'publicKey';

  constructor(private http: HttpClient) {}

  checkOnEquality(newRequest: object, oldRequest: object) {
    return Object.entries(newRequest).every(currentArray => {
      return currentArray[1] === oldRequest[currentArray[0]];
    });
  }

  verifyCredentials(data: object) {
    return this.http
      .post<validationResponse>(this.url, { credentials: data })
      .subscribe(response => {
        return response;
      });
  }

  registerNewUser(userData: object) {
    return this.http
      .put(this.url, { credentials: userData })
      .subscribe(response => {
        return response;
      });
  }
}
