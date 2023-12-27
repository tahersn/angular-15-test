import { Component } from '@angular/core';
import { Product } from '../Modele/Product';
import {Router} from '@angular/router';
import { OnInit } from '@angular/core';
import {ProductsService} from '../Modele/services';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})


export class ProductsListComponent implements OnInit {
constructor(private router: Router , private ps : ProductsService) { }
 products: Product[]=[];
  showAlert = false;
  incoming='';
  propmessage="this is props";
  async ngOnInit() {
    try {
      this.products = await this.ps.getProducts();
    } catch (error) {
      console.error(error);
    }
  }


  detail(id: number):void{
    console.log("clicked",id);
    this.router.navigateByUrl('/products/pp/'+id);
  }
  edit (id: number):void{
    console.log("clicked",id);
    this.router.navigateByUrl('/products/edit/'+id);
  }
  delete(id:number):void{
    //this.ps.deleteProduct(id);
    this.showAlert = true;

    // Hide the alert after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
  show(value: string): void {
    // Extract the value directly, no need to use (event.target as HTMLInputElement).value
    this.incoming = value;
  }
}


// import { Component, OnInit } from '@angular/core';
// import { Product } from './product.model';
// import { ProductService } from './product.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private productService: ProductService) { }

//   ngOnInit(): void {
//     this.productService.getProducts()
//       .subscribe((data: Product[]) => {
//         this.products = data;
//       });
//   }
// }