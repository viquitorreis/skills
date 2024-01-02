import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public googleClientId = environment.googleClientId

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  async onSubmit() {
    if (this.loginForm.invalid) {
      return alert("implementar validação")
    }

    try {
      this.authService.login(this.loginForm.value).then(async (response: any) => {
        response = await lastValueFrom(response)
        console.log(response)
        if (response?.admin === 'true') {
          localStorage.setItem("ADMIN", response.admin)
          this.router.navigate(['admin/dashboard'])
        } else {
          this.router.navigate(['dashboard'])
        }
      })
    } catch (error) {
      console.error(error)
    }
    
  }
}
