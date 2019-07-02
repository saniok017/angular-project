import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { StateService } from '../state.service';
import { PasswordValidator } from './validators/password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  email: FormControl = new FormControl(
    '',
    Validators.compose([Validators.required, Validators.email])
  );
  password: FormControl = new FormControl(
    '',
    Validators.compose([
      Validators.minLength(5),
      Validators.required,
      //this is for the letters (both uppercase and lowercase) and numbers validation
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
    ])
  );
  confirmPassword: FormControl = new FormControl('', Validators.required);
  matchingPasswordsGroup: FormGroup = new FormGroup(
    {
      password: this.password,
      confirmPassword: this.confirmPassword,
    },
    (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    }
  );
  fname: FormControl = new FormControl('', [Validators.required]);
  lname: FormControl = new FormControl('', [Validators.required]);
  address: FormControl = new FormControl('');
  gender: FormControl = new FormControl('');
  picker: FormControl = new FormControl('');
  registrationForm;
  hide: boolean = true;
  response;
  errorLogger = [];
  tooltipMessage: string;
  tooltipDisabled: string = 'true';
  lastrequest: object = {};

  constructor(private stateService: StateService, private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
      fname: this.fname,
      lname: this.lname,
      address: this.address,
      gender: this.gender,
      picker: this.picker,
    });
  }

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
      case 'fname':
        return this.fname.hasError('required') ? 'You must enter a value' : '';
      case 'lname':
        return this.lname.hasError('required') ? 'You must enter a value' : '';
      default:
        return 'Some Error';
    }
  }

  showErrorTooltip(tooltip) {
    this.tooltipDisabled = 'false';
    setTimeout(() => tooltip.hide(), 1000);
    setTimeout(() => tooltip.show());
  }

  async register(tooltip) {
    const payload = this.registrationForm.value;
    const requiered = [
      payload.fname,
      payload.lname,
      payload.password,
      payload.password,
      payload.email,
    ];

    if (requiered.some(field => field === '')) {
      this.tooltipMessage = 'Feel all required fields please';
      this.showErrorTooltip(tooltip);
      return;
    }

    if (this.matchingPasswordsGroup.invalid) {
      this.tooltipMessage = 'Password must be 5 chars long with upper case and lower case letter';
      this.showErrorTooltip(tooltip);
      return;
    }

    // perform new request only with new data
    if (!this.stateService.checkOnEquality(payload, this.lastrequest)) {
      this.response = await this.stateService.registerNewUser(payload);
      this.lastrequest = payload;
    }

    if (this.response.statusText === 'OK') {
      this.registrationForm.reset();
      return;
    } else {
      this.tooltipMessage = 'Something went wrong';
      this.errorLogger.push(this.response.error);
      this.showErrorTooltip(tooltip);
    }
  }

  ngOnInit() {}
}
