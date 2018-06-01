import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
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
  //private element: ElementRef;
  @ViewChild("descricaoRef") inputDescricao: ElementRef;
  @ViewChild("siglaRef") inputSigla: ElementRef;

  constructor(private api: ApiService, private sistemaService: SistemaService,
              private messageService: MessageService, private router: Router) {
    this.message = this.messageService.message;
  }

  ngOnInit() {
    //(this.element.nativeElement).find('#descricao').focus();
    //this.inputDescricao.nativeElement.focus()
  }

  public ngAfterViewInit(): void {
    //this.inputDescricao.nativeElement.focus();
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
          if(data.error){
            alert(data.data);
          }else{
            alert('Operação realizada com sucesso.');
            this.router.navigate(['/sistemas']);
          }
        },
        (error) => {
          console.log(error)
        },
    );
  }
}
