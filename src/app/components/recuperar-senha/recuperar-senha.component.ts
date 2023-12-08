import { UsuarioService } from './../core/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.scss'
})
export class RecuperarSenhaComponent implements OnInit {

  emailForm: FormGroup;

  constructor(private usuarioService: UsuarioService) {
    this.emailForm = new FormGroup({
      email: new FormControl(''),
    });
  }

  ngOnInit(): void { }

  submitForm() {
    const email = this.emailForm.value.email;
    this.usuarioService.recoveryPassword(email).subscribe(
      (response) => {
        console.log('Email enviado para recuperar senha');
      },
      (error) => {
        console.error('Falha ao enviar o email de recuperação de senha');
      }
    );
  }
}
