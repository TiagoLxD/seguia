import { AuthService } from '../core/services/auth.service';
import { UsuarioService } from './../core/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  estaLogado = false

  constructor(private authServicet: AuthService) { }

  ngOnInit(): void {
    this.estaLogado = this.authServicet.isLoggedIn()
  }

}
