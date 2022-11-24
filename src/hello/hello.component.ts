import { Component, Input } from "@angular/core";

@Component({
    selector: 'custom-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css'] //styleUrls puede aceptar varias hojas de estilo a la vez, por eso está dentro de un array
})

export class HelloComponent{
    @Input() name?:string; //pasa un valor de fuera del componente(anterior) hacia dentro del componente gracias al valor Input para que pueda ser REUTILIZABLE

    constructor(){
    }
}