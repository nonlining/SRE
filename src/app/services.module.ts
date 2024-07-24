import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Service { 

  private apiUrl = 'http://127.0.0.1:5000/api';
  
  constructor(private http: HttpClient) { }



  getOptions(): Observable<any> {
    
    return this.http.get<any>(`${this.apiUrl}/get_options`);
  }



}
