import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private readonly URL = environment.API_URL;

  private readonly entrypoint = {
    login: this.URL + "/login",
    recoveryPassword: this.URL + "/recover-password",
  };

  constructor(private http: HttpClient) {}

  login(dados: LoginRequest): Observable<TokenReponse> {
    return this.http.post<TokenReponse>(this.entrypoint.login, dados);
  }

  isLogging() {
    console.log("isLogging");
  }

  recoveryPassword(email: string): Observable<any> {
    return this.http.post<any>(this.entrypoint.recoveryPassword, { email });
  }
}

interface TokenReponse {
  token: string;
}

export interface LoginRequest {
  email: string;
  senha: string;
}
