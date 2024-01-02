import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment.development';
import { catchError, firstValueFrom, lastValueFrom, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

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

    this.authService.register(this.newUserForm.value).pipe(catchError(err => {
      console.log(err.error)
      alert('Houve um erro ao criar o user: ' + err.error.Error);
      return throwError(() => err);
    })).subscribe((res: any) => {
      alert("User criado")
      this.newUserForm.reset()
    })
    
  }

}
