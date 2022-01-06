import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent, //declarando los dos componentes
        ListadoComponent
    ],
    exports:[
        ListadoComponent// exportando solo el listadoComponent
    ],
    imports:[
      CommonModule //
    ]
})

export class HeroesModule{}