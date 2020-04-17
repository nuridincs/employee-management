import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANST } from './utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getAll(){
    return this.httpClient.get(CONSTANST.routes.employee.list);
  }

  public getDetail(id: number){
    return this.httpClient.get(CONSTANST.routes.employee.detail.replace(':id', String(id)));
  }

  public update(){
    return this.httpClient.get(CONSTANST.routes.employee.update);
  }

  public delete(id: number){
    return this.httpClient.get(CONSTANST.routes.employee.delete);
  }
}
