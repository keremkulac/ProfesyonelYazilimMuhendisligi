import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  lists: List[] ;
  products?: Product[] ;

  selectedListId: string;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.listId) {
          this.selectedListId = params.listId;
          this.productService.getProducts(params.listId).subscribe((product: any)=> {
            this.products = product;
          })
        } else {
          this.products = undefined;
        }
      }
    )


    this.productService.getLists().subscribe((list : any) => {
      this.lists = list;
    })
    
  }

  onProductClick(product: Product) {
    this.productService.complete(product).subscribe(() => {
      console.log("Completed successully!");
      product.completed = product.completed;
    })
  }

  onDeleteListClick() {
    this.productService.deleteList(this.selectedListId).subscribe((res: any) => {
      this.router.navigate(['/lists']);
      console.log(res);
    })
  }

  onDeleteProductClick(id: string) {
    this.productService.deleteProduct(this.selectedListId, id).subscribe((res: any) => {
      this.products = this.products!.filter(val => val._id !== id);
      console.log(res);
    })
  }

}
