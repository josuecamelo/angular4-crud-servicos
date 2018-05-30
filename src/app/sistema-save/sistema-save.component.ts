import { Component, OnInit } from '@angular/core';
import {PaginationSistema} from "../models/pagination-sistema.model";
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
  paginationSistema:PaginationSistema;


  constructor(private api: ApiService, private sistemaService: SistemaService,
              private messageService: MessageService, private router: Router) {
    this.message = this.messageService.message;
  }

  ngOnInit() {
  }

  save(){
    this.sistemaService.getSistemas('incluir',{descricao: 'Sistema'}).subscribe(
        (data) => {



        },
        (error) => {
          console.log(error)
        },
    );
  }
}
