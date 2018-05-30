import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {MessageService} from "../services/message.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ApiService} from "../services/api.service";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import {SistemaService} from "../services/sistema.service";
import {PaginationSistema} from "../models/pagination-sistema.model";
import {Sistema} from "../models/sistema.model";


@Component({
  selector: 'app-sistemas-list',
  templateUrl: './sistemas-list.component.html',
  styleUrls: ['./sistemas-list.component.css']
})

export class SistemasListComponent implements OnInit {
  sistemas:any = [];
  descricao = '';
  sigla = '';
  email = '';
  //public pesqForm:FormGroup;
  message = '';
  registros:any = [];
  paginationSistema:PaginationSistema;
  sistema:Sistema;

  constructor(private api: ApiService, private sistemaService: SistemaService, private messageService: MessageService) {
    this.message = this.messageService.message;
  }

  ngOnInit() {

  }

  save(){
    this.sistemaService.getSistemas().subscribe((data: PaginationSistema) => this.paginationSistema =  data );
  }


  clear(){
    this.descricao = '';
    this.sigla = '';
    this.email = '';
  }
}
