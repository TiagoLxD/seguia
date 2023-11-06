import { environmnet } from './../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private readonly _URL = environmnet.API_URL

  constructor(private http: HttpClient) { }

  cadastrar(dados: any): Observable<any> {
    return this.http.post(`${this._URL}/cadastro`, dados)
  }
}
