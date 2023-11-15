import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorComponent } from './components/editor/editor.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VideoAulasComponent } from './pages/video-aulas/video-aulas.component';

import { AuthGuard } from './admin/guards/auth.guard';
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: "editor",
    component: EditorComponent
  },
  {
    path: "cadastro",
    component: CadastroComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "recovery",
    component: RecuperarSenhaComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "video",
    component: VideoAulasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
