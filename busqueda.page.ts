import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, SearchbarInputEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BusquedaPage implements OnInit {
agregaAFavoritos: any;
Favoritos: any;
isModalPriceOpen: any;
handleInput($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
throw new Error('Method not implemented.');
}
resultadoBusqueda: any;

  constructor() {}
  
  ngOnInit() {

  }

}
