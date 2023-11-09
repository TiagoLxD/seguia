import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit, OnDestroy {

  private readonly sub$ = new Subscription();

  showPassword: boolean = false;
  cadastroSucesso: boolean = false;
  camposTocados = { email: false, emailConfirm: false };
  cadastroForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    if (this.sub$) {
      this.sub$.unsubscribe();
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  cadastrar() {
    if (this.cadastroForm.valid) {
      // const sub = this.cadastroService.cadastrar(this.cadastroForm.value).subscribe(res => {
      //   if (res.message) {
      //     this.cadastroSucesso = true
      //   }
      // })
      // this.sub$.add(sub);
    }
  }

}
