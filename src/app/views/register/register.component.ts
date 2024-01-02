import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public googleClientId = environment.googleClientId

  constructor(
    private authService: AuthService
  ) { }
  
  newUserForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  async onSubmit() {
    if (this.newUserForm.invalid) {
      return alert("implementar validação")
    }

    console.log("newUserForm:", this.newUserForm.value)
    try {
      await this.authService.register(this.newUserForm.value).then((response: any) => {
        console.log(response)
        alert("User criado")
        this.newUserForm.reset()
      })
    } catch (error) {
      console.error()
    }
  }

}
