import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElixirsEntity } from '../interfaces/elixir.models';

@Injectable({
  providedIn: 'root'
})
export class ElixirService {

  constructor(private http: HttpClient) { }

  getElixirs(name?: string) {
    let params = new HttpParams();
    if (name) {
      params = params.set('name', name);
    }
    return this.http.get<ElixirsEntity[]>('Elixirs', { params });
  }
}
