/**
 * Created by JCamelo on 30/05/2018.
 */

import {HttpClient, HttpParams} from "@angular/common/http";
import {PaginationSistema} from "../models/pagination-sistema.model";
import {ApiService} from "./api.service";
import {Injectable} from "@angular/core";

@Injectable()
export class SistemaService{
    private url: string = 'http://localhost:8000/api/sistemas';
    constructor(private http: HttpClient, private api: ApiService) { }

    getSistemas(endpoint: string, params?: any) {
        return this.http.post<PaginationSistema>(this.url + '/' + endpoint, params);
    }

    gravarSistema(endpoint: string, params?: any){
        return this.http.post<any>(this.url + '/' + endpoint, params);
    }
}