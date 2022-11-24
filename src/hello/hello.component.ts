import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'custom-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css'] //styleUrls puede aceptar varias hojas de estilo a la vez, por eso está dentro de un array
})

export class HelloComponent{
    @Input() name?:string; //pasa un valor de fuera del componente(anterior) hacia dentro del componente gracias al valor Input para que pueda ser REUTILIZABLE
    @Output() sayHello:EventEmitter<string> = new EventEmitter<string>(); //solo emitira eventos de tipo string

    constructor(){
    }

    onNameClick() {
        this.sayHello.emit('Hello!');
    }
}