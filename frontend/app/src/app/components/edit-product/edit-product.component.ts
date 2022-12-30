import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  productId: string;
  listId: string;

  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.productId = params.productId;
        this.listId = params.listId;
      }
    )
  }

  updateProduct(title: string) {
    this.productService.updateProduct(this.listId, this.productId, title).subscribe(() => {
      this.router.navigate(['/lists', this.listId]);
    })
  }

}
