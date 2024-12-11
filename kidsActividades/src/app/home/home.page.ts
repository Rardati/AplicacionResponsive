import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
    
  actividades: any; 
  searchText: string = ''; 
  
  

  constructor(private httpClient: HttpClient) {

    this.actividades = this.httpClient.get('https://raw.githubusercontent.com/Rardati/AplicacionResponsive/refs/heads/main/DocJSON/actividades.json');
      
  }

   
}