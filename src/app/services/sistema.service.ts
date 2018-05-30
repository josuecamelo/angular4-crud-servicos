/**
 * Created by JCamelo on 30/05/2018.
 */

import {HttpClient} from "@angular/common/http";
import {PaginationSistema} from "../models/pagination-sistema.model";
import {ApiService} from "./api.service";
import {Injectable} from "@angular/core";

@Injectable()
export class SistemaService{
    private url: string = 'http://localhost:8000/api/sistemas';
    constructor(private http: HttpClient, private api: ApiService) { }

    getSistemas(){
        return this.http.get<PaginationSistema>(this.url);
    }
}