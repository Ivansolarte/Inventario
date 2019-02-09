import { Injectable } from '@angular/core';// c
import { Http, Response, Headers, RequestOptions } from '@angular/http';// c

import { Observable } from 'rxjs';// c
import { Inventario } from './inventario'; // el archivo de la clase inventario (campos de la base de BD)
import { map } from 'rxjs/operators';
// import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operato/catch';

import { from } from 'rxjs';

@Injectable()
export class InventarioService {
  private headers = new Headers({'Content-Type':'application/json'});
  private url = 'http://localhost:8000/usuario';
  constructor(private http:Http) { }

  getInventario(): Observable<Inventario[]> {
    let url = `${this.url}`;
    // return this.http.get(url).map(r => r.json()).catch(this.handleError);
    // return this.http.get(url).pipe(map(r => r.json())).catchError(this.handleError);
    return this.http.get(url).pipe(map(r => r.json()));
  }

  private handleError(error: Response | any) {
    let errMsg: string;
      if (error instanceof Response) {
        let body = error.json() || '';
        let err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      return Observable.throw(errMsg);
  }
}
