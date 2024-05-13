import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DestinosService } from 'src/app/servicios/DestinosService';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {
categorias: any;
  
  constructor(
    private servicio: DestinosService
  ) {}

 async ngOnInit() {
  const res = await this.servicio.getCategorias()
  this.categorias = res.schemas
  }
}
