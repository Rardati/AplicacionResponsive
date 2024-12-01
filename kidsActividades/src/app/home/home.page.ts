import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  actividades: any[] = []; // Almacena las actividades
  filterText: string = ''; // Texto de búsqueda

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Cargar datos desde el archivo JSON remoto
    this.http
      .get<any[]>('https://raw.githubusercontent.com/Rardati/AplicacionResponsive/main/actividades.json') // URL Raw
      .subscribe((data) => {
        this.actividades = data; // Asignar datos al array actividades
      });
  }

  // Método para filtrar actividades basado en el texto de búsqueda
  filterActivities() {
    if (!this.filterText) {
      return this.actividades; // Retornar todas las actividades si no hay filtro
    }
    return this.actividades.filter((actividad) =>
      actividad.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}