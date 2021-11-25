import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  // Variavel criada para armazenar o endereço da API
  url = "http://localhost:3000/noticias";

  // insere a dependencia HttClient
  constructor(private httpClient: HttpClient) { }

  // Variavel que armazena as configurações dos Headers da requisição
  httpOptions = {
    headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
  }

  // Método Get, que vai trazer as notícias da API
  getNoticias(): Observable<Noticia[]> {
    return this.httpClient.get<Noticia[]>(this.url)
  }

}
