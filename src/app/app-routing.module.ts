import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './products/product/product.component';
import {ProductsListComponent} from './products/products-list/products-list.component';
import { UpdateComponent } from './products/update/update.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path:'products',component:ProductsListComponent},
  {path: 'products/pp/:id', component:ProductComponent},
  {path:'products/edit/:id',component:UpdateComponent},
  {path: '**', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
