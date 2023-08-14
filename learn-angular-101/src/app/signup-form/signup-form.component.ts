import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    'username': new FormControl(),
    'password': new FormControl(),
  });
}
