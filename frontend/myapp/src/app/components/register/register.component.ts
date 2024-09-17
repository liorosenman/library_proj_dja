import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistersrvService } from '../../services/registersrv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  myForm: FormGroup;
  msg: string = '';

  constructor(private fb: FormBuilder, private registerSrv: RegistersrvService) {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      city: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  addUser() {
    if (this.myForm.valid) {
      const credentials = {
        username: this.myForm.get('username')?.value,
        password: this.myForm.get('password')?.value,
        name: this.myForm.get('name')?.value,
        city: this.myForm.get('city')?.value,
        age: this.myForm.get('age')?.value,
      };

      this.registerSrv.register(credentials).subscribe({
        next: (msg: string) => {
          this.msg = 'Congratulations!';
        },
        error: (err: string) => {
          this.msg = 'Login failed. Please try again.';
          console.error(err);
        }
      });
    }
    else {
      this.msg = 'Please fill in all required fields.';
    }
  }
}