import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(public http: HttpClient) { }

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private fieldURL = environment.apiUrl + '/';

  getPacotes(): Observable<Object> {
    return this.http.get<Object>(this.fieldURL)
  }

  getPacotesDisponiveis(): Observable<Object> {
    return this.http.get<Object>(this.fieldURL);
  }

  addPacote(pacote: Object): Observable<Object> {
    return this.http.post<Object>(this.fieldURL + "/", pacote, {
      headers: this.headers
    });
  }
}