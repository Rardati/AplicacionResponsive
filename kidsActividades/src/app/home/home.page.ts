import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  actividades: any[] = []; // Variable para almacenar los datos

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Cargar datos desde el archivo JSON remoto
    this.http
      .get<any[]>('https://github.com/Rardati/AplicacionResponsive/blob/main/actividades.json')
      .subscribe((data) => {
        this.actividades = data;
      });
  }
}