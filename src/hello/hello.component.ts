import { Component } from "@angular/core";

@Component({
    selector: 'custom-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css'] //styleUrls puede aceptar varias hojas de estilo a la vez, por eso está dentro de un array
})

export class HelloComponent{}