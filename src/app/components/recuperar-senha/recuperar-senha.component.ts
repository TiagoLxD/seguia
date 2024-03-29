import { UsuarioService } from "./../core/services/usuario.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-recuperar-senha",
  templateUrl: "./recuperar-senha.component.html",
  styleUrl: "./recuperar-senha.component.scss",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
})
export class RecuperarSenhaComponent implements OnInit {
  emailForm: FormGroup;

  constructor(private usuarioService: UsuarioService) {
    this.emailForm = new FormGroup({
      email: new FormControl(""),
    });
  }

  ngOnInit(): void {}

  submitForm() {
    const email = this.emailForm.value.email;
    this.usuarioService.recoveryPassword(email).subscribe({
      next: response => {
        console.log("Email enviado para recuperar senha");
      },
      error: error => {
        console.error("Falha ao enviar o email de recuperação de senha");
      },
    });
  }
}
