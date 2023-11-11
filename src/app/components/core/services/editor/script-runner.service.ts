import { environment } from './../../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScriptRunnerService {
  private readonly URL = environment.API_URL
  private readonly routes = {
    run: this.URL + '/run'
  }
  constructor(private http: HttpClient) { }

  run(dataRunner: any): Observable<any> {
    return this.http.post(this.routes.run, dataRunner)
      .pipe(
        catchError(() => {
          return of(null);
        })
      )
  }
}
