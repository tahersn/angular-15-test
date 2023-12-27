import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Modele/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService}  from '../Modele/services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit  {
  constructor(private route: ActivatedRoute,private prductsservice : ProductsService) { }
  product!: Product|undefined;
  @Input() message!: '';
  async ngOnInit(): Promise<void> {
    try {
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.product = await this.prductsservice.getProduct(id);
    }catch(error){
      console.error(error);
    }
  }
}
