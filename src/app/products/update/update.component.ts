import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductsService } from '../Modele/services';
import { Product } from '../Modele/Product';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  // Import necessary form-related modules



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateForm!: FormGroup;  
  constructor(private prductsservice: ProductsService , private r : ActivatedRoute , private fb : FormBuilder) {
    this.updateForm = this.fb.group({

      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: [''],
      category: ['', Validators.required],
      isAvailable: ['', Validators.required],
    })

   }
  product!: Product | undefined;
  ngOnInit(): void {
    this.r.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      //this.product = this.prductsservice.getProduct(id);
    });

    
  }
  onSubmit() {
    if(this.product){
    //this.prductsservice.updateProduct(this.product.id!, this.product);
  }

  }



}
