import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProduitServiceService } from './produit-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<any> {

  constructor(private produitService : ProduitServiceService) { }

  resolve() {
    return this.produitService.getProduits();
  }
}
