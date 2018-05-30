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

    /*getSistemas(): Promise<PaginationSistema>{
        console.log('consultando');
        return this.http.get(this.url)
            .toPromise()
            .then(response => response as PaginationSistema)
            .catch(this.handleError);


    }*/

    getSistemas(){
        return this.http.get<PaginationSistema>(this.url);
    }

    /*getBookingsAtUrl(url: string): Promise<PaginatedBooking>{
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as PaginatedBooking)
            .catch(this.handleError);
    }*/

    /*private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }*/
}