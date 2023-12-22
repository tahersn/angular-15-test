import { products} from "./productsTable";
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ProductsServices {
    getProducts() {
        return products;
      }
    
    getProduct(id: number) {
        return products.find(p => p.id === id);
    }
}