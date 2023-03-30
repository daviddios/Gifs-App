import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'kLyHmWIErj3usa8hVSCG6Ynstp7ahVIh'
  private _historial: string[] = []
  // TODO:  cambiar any por su tipo
  public resultados: Gif[] = []
  get historial() {
    return [...this._historial];
  }

  //importo el modulo de HttpClientModule
  constructor(private http: HttpClient){};

  //Funcion Buscar Gifs
  buscarGifs(query: string) {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {

      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10)
    }
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/stickers/search?api_key=kLyHmWIErj3usa8hVSCG6Ynstp7ahVIh&q=${query}&limit=20`)
    .subscribe((resp) => {
      console.log(resp.data);
      this.resultados = resp.data
    })
  }
}
