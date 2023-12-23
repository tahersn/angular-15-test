import { Product } from "./Product";
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
    updateProduct(id: number, product: Product) {
        let index = products.findIndex(p => p.id === product.id);
        products[index] = product;
        console.log('updated');   
    }
    deleteProduct(id: number) {
        let index = products.findIndex(p => p.id === id);
        products.splice(index, 1);
    }
}