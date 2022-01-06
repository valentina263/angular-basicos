
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador.component";
@NgModule({
declarations:[
        
        ContadorComponent
        
      
    ],
    exports:[
        ContadorComponent // Exportando solo el listadoComponent......
    ],
    
    

})
export class ContadorModule{}