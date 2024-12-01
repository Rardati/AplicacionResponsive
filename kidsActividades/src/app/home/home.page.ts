import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  actividades: any; 

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // Cargar datos desde el archivo JSON remoto
    this.actividades=  this.httpClient.get('https://raw.githubusercontent.com/Rardati/AplicacionResponsive/main/actividades.json').pipe(map((res:any) => res['results']));
     
  }

  
}