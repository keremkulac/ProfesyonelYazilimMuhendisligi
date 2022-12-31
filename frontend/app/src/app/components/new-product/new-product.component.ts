import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  listId: string;
  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId'];
      }
    )
  }
  
  createProduct(title: string) {
    this.productService.createProduct(title, this.listId).subscribe((newProduct: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    })
  }
  
}
