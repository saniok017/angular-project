import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';

import { StateService } from '../state.service';
import {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MatTooltipDefaultOptions
} from '@angular/material/tooltip';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 0,
  hideDelay: 1000,
  touchendHideDelay: 1000
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
  ]
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password: FormControl = new FormControl('');
  hide: boolean = true;
  response: string;
  tooltipDisabled: string = 'true';

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  constructor(private stateService: StateService) {}

  async onSubmit(userData: object, tooltip) {
    const responce = await this.stateService.verifyCredentials(userData);
    this.tooltipDisabled = 'false';
    tooltip.show();
    if (responce === 'verified') {
      this.email.reset();
      this.password.reset();
      return;
    } else {
      this.response = responce;
    }
  }

  ngOnInit() {}
}
