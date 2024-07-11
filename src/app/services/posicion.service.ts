import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posicion } from '../models/posicion.model';
import { AppSettings } from '../app.settings';


const baseUrlUtil = AppSettings.API_ENDPOINT+ '/consultaFutbolista';
@Injectable({
  providedIn: 'root'
})
export class PosicionService {

  constructor(private http:HttpClient) { }

  listaPosicion():Observable<Posicion[]>{
    return this.http.get<Posicion[]>(baseUrlUtil + "/listaPosiciones")
  }
}