import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MONACO_PATH, MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { HeaderComponent } from './components/header/header.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { MaterialModule } from './shared/material.module';
import { JwtInterceptor } from './admin/interceptor/jwt.interceptor';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RankComponent } from './pages/dashboard/rank/rank.component';
import { VideoAulasComponent } from './pages/video-aulas/video-aulas.component';
import { RecuperarSenhaComponent } from './components/recuperar-senha/recuperar-senha.component';
import { DialogSuccessComponent } from './components/editor/dialog-success/dialog-success.component';
@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MonacoEditorModule,
        FormsModule,
        AngularSplitModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        EditorComponent,
        CadastroComponent,
        LoginComponent,
        HomeComponent,
        DashboardComponent,
        RankComponent,
        VideoAulasComponent,
        RecuperarSenhaComponent,
        DialogSuccessComponent
    ],
    providers: [
        {
            provide: MONACO_PATH,
            useValue: 'https://unpkg.com/monaco-editor@0.44.0/min/vs'
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true,
        }
    ],
})
export class AppModule { }
