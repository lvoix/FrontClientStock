import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProduitServiceService } from './service/produit-service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  dataproduit : any;
  productForm: FormGroup;
  operation : string = 'add';
  selectedProduit : any;
  constructor( private fb: FormBuilder, private route: ActivatedRoute, private produitservice : ProduitServiceService) {
     this.createForm();
   }

  ngOnInit() {
  /*   this.dataproduit = [{'ref':"1234", 'quantite': 34, 'prix':120},
                        {'ref':"3434", 'quantite': 45, 'prix':130},
                        {'ref':"4535", 'quantite': 433,'prix':100}] */
                        this.initProduit();
                        this.dataproduit = this.route.snapshot.data.produits;
                        console.log('data produit', +this.dataproduit);
  }

  createForm(){
    this.productForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prix: ''
    });
  }

  LoadProduits(){
    this.produitservice.getProduits().subscribe( data => {this.dataproduit = data},
                                                error =>{console.log('error log')});
  }
  addProduit(){
    let pro = this.productForm.value;
    this.produitservice.addProduit(pro).subscribe( res => {
      this.initProduit();
       this.LoadProduits();
    });
  }

  updateProduit(){
    this.produitservice.updateProduit(this.selectedProduit).subscribe( res => {
       this.initProduit();
       this.LoadProduits();
    });
  }
  deleteProduit(){
    this.produitservice.deleteProduit(this.selectedProduit.id).subscribe( res => {
      this.selectedProduit = {};
      this.LoadProduits();
    });
  }
  initProduit(){
    this.selectedProduit = {};
    this.createForm();
  }
}
