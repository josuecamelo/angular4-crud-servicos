/**
 * Created by JCamelo on 30/05/2018.
 */
import { Sistema } from './sistema.model';

export class PaginationSistema {
    current_page: number;
    data: Sistema[];
    from: number;
    last_page: number;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}