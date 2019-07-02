import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { StateService } from '../state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  hide: boolean = true;
  response;
  tooltipDisabled: string = 'true';
  tooltipMessage: string;
  lastrequest: object = {};
  errorLogger = [];

  getErrorMessage(inputFieldType) {
    switch (inputFieldType) {
      case 'password':
        return this.password.hasError('required')
          ? 'You must enter a password'
          : this.email.hasError('minlength')
          ? 'length must be more than 5'
          : '';
      case 'email':
        return this.email.hasError('required')
          ? 'You must enter a value'
          : this.email.hasError('email')
          ? 'Not a valid email'
          : '';

      default:
        return 'Some Error';
    }
  }

  constructor(private stateService: StateService) {}

  showErrorTooltip(tooltip) {
    this.tooltipDisabled = 'false';
    setTimeout(() => tooltip.hide(), 1000);
    setTimeout(() => tooltip.show());
  }

  async onSubmit(tooltip) {
    const payload = { email: this.email.value, password: this.password.value };

    if (this.stateService.verifyPayload(payload)) {
      // perform new request only with new data
      if (!this.stateService.checkOnEquality(payload, this.lastrequest)) {
        this.response = await this.stateService.verifyCredentials(payload);
        this.lastrequest = payload;
      }

      if (this.response.verified) {
        this.email.reset();
        this.password.reset();
        return;
      } else {
        this.tooltipMessage = 'oops something went wrong';
        this.showErrorTooltip(tooltip);
        this.errorLogger.push(this.response.error);
      }
    } else {
      this.tooltipMessage = 'invalid credentials';
      this.showErrorTooltip(tooltip);
    }
  }

  ngOnInit() {}
}
