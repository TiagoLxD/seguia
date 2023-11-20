import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  estaLogado = false;
  editorAberto = true;
  isEditorRoute = false;

  constructor(private authService: AuthService, private router: Router) {
    this.estaLogado = this.authService.isLoggedIn();
    this.detectarRotaEditor();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.detectarRotaEditor();
      }
    });

  }

  detectarRotaEditor(): void {
    this.isEditorRoute = this.router.url.includes('/editor');
  }

  ngOnInit(): void {
  }


  logout(): void {
    this.authService.logout();
  }

}
