import { Injectable } from '@angular/core';
import axios from "axios";
import { Product } from "./Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //products!: Product[];
  url: string = 'http://localhost:8080/SpringMVC/products/';

  async getProducts(): Promise<Product[]> {
    try {
      const response = await axios.get(this.url + 'all');
      console.log(response);
      return response.data;  // Return the fetched products
    } catch (error) {
      console.error(error);
      return [];  // Return an empty array or handle the error as per your requirement
    }
  }
  async getProduct(id: number): Promise<Product> {
    try {
      const response = await axios.get(this.url +'find/'+ id);
      console.log(response);
      return response.data;  
    } catch (error) {
      console.error(error);
      return new Product();  
    }
  }
}