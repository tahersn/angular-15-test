import { Component, OnInit } from '@angular/core';
import { Product } from '../Modele/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductsServices}  from '../Modele/services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit  {
  constructor(private route: ActivatedRoute,private prductsservice : ProductsServices) { }
  product!: Product|undefined;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.product = this.prductsservice.getProduct(id);
    });
  }

}
