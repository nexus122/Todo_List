import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  Set(key: string, param: any){
    localStorage.setItem(key, param);
  }
  Get(key: string){
    return localStorage.getItem(key);
  }

  GetParse(key:string){
    return JSON.parse(localStorage.getItem(key)!);
  }
}
