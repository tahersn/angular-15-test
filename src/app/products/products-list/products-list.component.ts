import { Component } from '@angular/core';
import { Product } from '../Modele/Product';
import {Router} from '@angular/router';
import { OnInit } from '@angular/core';
import {ProductsServices} from '../Modele/services';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})


export class ProductsListComponent implements OnInit {
constructor(private router: Router , private ps : ProductsServices) { }
 products!: Product[];
 ngOnInit(): void {
  this.products = this.ps.getProducts();

  }


detail(id: number):void{
  this.router.navigate(['/product/:id', id]);
}
}


