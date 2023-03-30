import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private GifsService: GifsService) { };


  buscar(termino: string) {
    if (termino.trim().length === 0) {
      return
    }
    const valor = this.txtBuscar.nativeElement.value
    this.GifsService.buscarGifs(valor)
    this.txtBuscar.nativeElement.value = ''

  }
}
