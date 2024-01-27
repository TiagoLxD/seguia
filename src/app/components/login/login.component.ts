import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from './../core/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EMPTY, Subscription, catchError, of } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [NgIf, FormsModule, ReactiveFormsModule, RouterLink]
})
export class LoginComponent implements OnInit {
  private readonly sub$ = new Subscription();
  loginForm!: FormGroup;
  loginError: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(this.formFields);
  }

  private formFields = {
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]

  };


  login() {
    const loginValues = this.loginForm.value
    const sub = this._usuarioService
      .login(loginValues)
      .subscribe({
        next: ({ token }: ITokenResponse) => {
          localStorage.setItem('token', token)
          this.router.navigate(['/dashboard']);
        }, error: (err) => {
          this.loginError = true;
          console.log(err)
        }
      }
      )

    this.sub$.add(sub)

  }
}


interface ITokenResponse {
  token: string
}
