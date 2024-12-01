import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  searchText: string = '';
  allActivities: any[] = []; // Todas las actividades
  displayedActivities: any[] = []; // Actividades filtradas

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get('https://github.com/Rardati/AplicacionResponsive/blob/main/actividades.json')
      .subscribe((data: any[]) => {
        this.allActivities = data; // Guardar todas las actividades
        this.displayedActivities = [...data]; // Mostrar todas inicialmente
      });
  }

  // Filtrar actividades por texto ingresado
  filterItems() {
    const searchTextLower = this.searchText.toLowerCase();
    this.displayedActivities = this.allActivities.filter((actividad) =>
      actividad.nombre.toLowerCase().includes(searchTextLower)
    );
  }

  // Obtener clase CSS según la categoría
  getCategoryClass(category: string): string {
    switch (category) {
      case 'Manualidades':
        return 'manualidades';
      case 'Juegos al aire libre':
        return 'juegos-al-aire-libre';
      case 'Juegos tranquilos':
        return 'juegos-tranquilos';
      case 'Creatividad':
        return 'creatividad';
      case 'Educativo':
        return 'educativo';
      case 'Actividades físicas':
        return 'actividades-fisicas';
      default:
        return '';
    }
  }
}