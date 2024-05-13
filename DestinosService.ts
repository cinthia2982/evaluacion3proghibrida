import { Injectable } from '@angular/core';
import { resultadoswscategoriasdestinos, resultadoswsschemas } from '../ws/destinos';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  baseUrl: String = "https://opentripmap.com/ru/card/W286786280";

  constructor() {}

  async getCategorias(): Promise<resultadoswscategoriasdestinos> {
    const url = '${this.baseUrl}ru/card/W286786280?c=list'
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    return data
  }
  async getSchema(categorias:String): Promise<resultadoswsschemas> {
    const url = '${this.baseUrl}ru/card/W286786280?c=${categoria}'
    const respuesta = await fetch(url)
    const data:resultadoswsschemas = await respuesta.json()
    return data
  }
}
