import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  
  createList(title: string) {
    this.productService.createList(title).subscribe((list: any) => {
      console.log(list);
      this.router.navigate([ '/lists', list._id ]); 
    });
  }

}
