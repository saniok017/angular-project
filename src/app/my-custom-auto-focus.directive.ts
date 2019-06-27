import { Directive, OnInit } from '@angular/core';
import { MatInput } from '@angular/material';

@Directive({
  selector: '[appMyCustomAutoFocus]',
})
export class MyCustomAutoFocusDirective implements OnInit {
  constructor(private matInput: MatInput) {}

  ngOnInit() {
    setTimeout(() => this.matInput.focus());
  }
}
