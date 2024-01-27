import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule,MatMenuModule,MatDividerModule],
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

  ngOnInit(): void { }

  detectarRotaEditor(): void {
    this.isEditorRoute = this.router.url.includes('/editor');
  }

  logout(): void {
    this.authService.logout();
  }
}
