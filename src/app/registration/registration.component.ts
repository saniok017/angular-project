import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { StateService } from '../state.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required]);
  fname: FormControl = new FormControl('', [Validators.required]);
  lname: FormControl = new FormControl('', [Validators.required]);
  address: FormControl = new FormControl('');
  gender: FormControl = new FormControl('');
  hide: boolean = true;
  response: string;
  tooltipDisabled: string = 'true';
  lastrequest: object = {};

  constructor(private stateService: StateService) {}

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  async register(tooltip) {
    const payload = {
      emeil: this.email.value,
      password: this.password.value,
      fname: this.fname.value,
      lname: this.lname.value,
      address: this.address.value,
      gender: this.gender.value,
    };
    // need to emplement deep search here
    if (payload !== this.lastrequest) {
      this.response = await this.stateService.registerNewUser(payload);
      this.lastrequest = payload;
    }

    if (this.response === 'verified') {
      this.email.reset();
      this.password.reset();
      this.fname.reset();
      this.lname.reset();
      this.address.reset();
      this.gender.reset();
      return;
    } else {
      this.response = `invalid credentials ${this.response}`;
      this.tooltipDisabled = 'false';
      setTimeout(() => tooltip.hide(), 1000);
      setTimeout(() => tooltip.show());
    }
  }

  ngOnInit() {}
}
