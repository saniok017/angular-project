import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { StateService } from '../state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password: FormControl = new FormControl('', [Validators.required]);
  hide: boolean = true;
  response;
  tooltipDisabled: string = 'true';
  tooltipMessage: string;
  lastrequest: object = {};

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  constructor(private stateService: StateService) {}

  async onSubmit(tooltip) {
    const payload = { emeil: this.email.value, password: this.password.value };

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
      this.tooltipMessage = `invalid credentials ${this.response.error}`;
      this.tooltipDisabled = 'false';
      setTimeout(() => tooltip.hide(), 1000);
      setTimeout(() => tooltip.show());
    }
  }

  ngOnInit() {}
}
