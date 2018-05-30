import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
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
import {PagerService} from "../services/sistema-pagination.services";


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
  paginationSistema:PaginationSistema;
  private allItems: any[];
  pager: any = {};
  pagedItems: any[];
  public show:boolean = false;

  constructor(private api: ApiService, private sistemaService: SistemaService,
              private messageService: MessageService, private pagerService: PagerService,  private router: Router) {
    this.message = this.messageService.message;
  }

  ngOnInit() {

  }

  pesquisar(){

      this.sistemaService.getSistemas().subscribe((data: PaginationSistema) => {
        this.paginationSistema = data;
        this.setPage(1);
        this.toggle();
      });

  }

  clear(){
    this.descricao = '';
    this.sigla = '';
    this.email = '';
    this.toggle();
  }

  setPage(page: number) {
    //console.log(page);
    // get pager object from service
    //console.log(this.paginationSistema.total);
    this.pager = this.pagerService.getPager(this.paginationSistema.total, page, 50);
    // get current page of items
    this.pagedItems = this.paginationSistema.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  toggle() {
    this.show = !this.show;
  }
}
