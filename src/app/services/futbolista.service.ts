import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Futbolista } from '../models/futbolista.model';

const baseUrl = AppSettings.API_ENDPOINT+ '/consultaFutbolista';
@Injectable({
  providedIn: 'root'
})
export class FutbolistaService {

  constructor(private http: HttpClient) { }

  listaFutbolistaXPosicion(filtro: number): Observable<Futbolista[]> {
    return this.http.get<Futbolista[]>(`${baseUrl}/listaFutbolistasXPosiciones/${filtro}`);
}
}
