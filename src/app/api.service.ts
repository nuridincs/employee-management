import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANST } from './utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getAll(){
    return this.httpClient.get(CONSTANST.routes.data.list);
  }
}
