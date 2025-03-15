import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuraService {
  //angular doesn't support http request without a http client
  constructor(private client: HttpClient) { }


  getdata(){
    var apiproduct = "https://67cd64b6dd7651e464ee3d63.mockapi.io/products";
    return this.client.get(apiproduct);
  }

  getcategory() {
    var apicategory = "https://67cd64b6dd7651e464ee3d63.mockapi.io/categories";
    return this.client.get(apicategory);
  }
}
