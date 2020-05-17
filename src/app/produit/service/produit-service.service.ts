import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {API_URLS} from '../../config/api.url.config';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  constructor(private http : HttpClient) { }

  getProduits() : Observable<any>{
    return this.http.get(API_URLS.PRODUCT_URL);
  }
  addProduit(pro): Observable<any>{
    return this.http.post(API_URLS.PRODUCT_URL, pro);
  }
  updateProduit(pro): Observable<any>{
    return this.http.put(API_URLS.PRODUCT_URL, pro);
  }
  deleteProduit(id : number): Observable<any>{
    return this.http.delete(API_URLS.PRODUCT_URL +'/'+id);
  }
}
