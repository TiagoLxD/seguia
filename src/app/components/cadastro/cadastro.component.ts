import { CadastroService } from './../core/services/cadastro.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule]
})
export class CadastroComponent implements OnInit, OnDestroy {

  private readonly sub$ = new Subscription();

  showPassword: boolean = false;
  cadastroSucesso: boolean = false;
  camposTocados = { email: false, emailConfirm: false };
  cadastroForm!: FormGroup;

  typedText: string = '';
  originalText: string = 'Dê inicio ao seu futuro hoje mesmo! Estude do seu jeito e onde quiser, a hora que quiser.';

  constructor(private formBuilder: FormBuilder,
    private _cadastroService: CadastroService,
    private router: Router) {
    this.cadastroForm = this.formBuilder.group({
      completeName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit(): void {
    this.typeText();
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

      const payload = this.cadastroForm.value

      const sub = this._cadastroService
        .cadastrar(payload).subscribe(res => {
          if (res.message) {
            this.cadastroSucesso = true
            this.router.navigate(['/login'])
          }
        })
      this.sub$.add(sub);
    }
  }

  typeText() {
    const speed = 50;
    let i = 0;

    const tamanhoTexto = this.originalText.length

    const typeInterval = setInterval(() => {
      if (i < tamanhoTexto) {
        this.typedText += this.originalText.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, speed);
  }

}
