import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  
})
export class MainPageComponent  {
  personajes: Personaje[]=[
    {
      nombre:'Chris',
      poder: 25.1
    },
    {
      nombre:'Camila',
      poder:26.3
    }
  ]
  nuevo: Personaje={
    nombre:'Lucas',
    poder: 25
  }
 
 
}



