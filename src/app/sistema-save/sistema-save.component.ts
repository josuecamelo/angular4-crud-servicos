import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {MessageService} from "../services/message.service";
import {SistemaService} from "../services/sistema.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sistema-save',
  templateUrl: './sistema-save.component.html',
  styleUrls: ['./sistema-save.component.css']
})

export class SistemaSaveComponent implements OnInit {
  sistemas:any = [];
  descricao = '';
  sigla = '';
  email = '';
  url = '';
  message = '';

  constructor(private api: ApiService, private sistemaService: SistemaService,
              private messageService: MessageService, private router: Router) {
    this.message = this.messageService.message;
  }

  ngOnInit() {
  }

  /*
  * Metodo que efetua o envio de dados da a api restful
  *
  * */
  save(){
    let objReq = {
      descricao: this.descricao,
      sigla: this.sigla,
      email: this.email,
      url: this.url
    }


    this.sistemaService.gravarSistema('incluir', objReq).subscribe(
        (data) => {
          console.log(data);
          if(data.error){
            alert('Dados obrigatórios não informados.');
          }else{
            console.log(data);
            alert('Operação realizada com sucesso.');
            this.router.navigate(['/sistemas'])
          }
        },
        (error) => {
          console.log(error)
        },
    );
  }
}
