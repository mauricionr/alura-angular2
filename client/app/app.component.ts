import { Component, Inject } from '@angular/core'; //Lib usada para criar um componente TS usando ES6
import { Http } from '@angular/http'

@Component({
    moduleId: module.id,
    selector: 'app', //Nome do seletor que sera usado para chamar o componente
    templateUrl: './app.component.html' //Caminho da pagina que sera renderizada ao buscar componente
})

export class AppComponent {

    fotos: Object[] = [];

    constructor (http: Http){
        
         http
         .get('v1/fotos')
         .map(res => res.json())
         .subscribe(fotos => {
            this.fotos = fotos;
        }, erro => console.log("Erro ao processar lista de fotos"));
    }
}

