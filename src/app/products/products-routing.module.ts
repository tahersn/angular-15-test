import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from './products-list/products-list.component';
import { Product } from './Modele/Product';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'product/:id/detail', component:ProductComponent},
  {path: '**', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
