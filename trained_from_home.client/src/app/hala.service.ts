import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class HalaService {

  constructor(private sura: HttpClient) { }

  getproduct(){
    const apihala = "https://67cd64b6dd7651e464ee3d63.mockapi.io/products";
    return this.sura.get<any>(apihala);
  }
  addnewdata(data : any) {
    return this.sura.post('https://67d6af03286fdac89bc2aab8.mockapi.io/userss',data)
  }

  checkforuser() {
    return this.sura.get<any>('https://67d6af03286fdac89bc2aab8.mockapi.io/userss')
  }

}
