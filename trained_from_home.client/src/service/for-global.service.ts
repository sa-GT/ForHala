import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForGlobalService {

  constructor(private _http: HttpClient) { }

  getlink(): Observable <any>  {
    return this._http.get<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users")
  }
}
