import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {MessageService} from "../services/message.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ApiService} from "../services/api.service";

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

  constructor(private api: ApiService,  private messageService: MessageService) {
    this.message = this.messageService.message;
  }

  ngOnInit() {

  }

  save(){
    let seq = this.api.get('').pipe();
    seq.subscribe((res) => {
      this.registros = res;
    });
  }

  clear(){
    console.log(this.registros.data);

    this.descricao = '';
    this.sigla = '';
    this.email = '';
  }
}
