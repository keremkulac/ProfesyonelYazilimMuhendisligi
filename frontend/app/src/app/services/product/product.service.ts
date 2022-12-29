import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private webReqService: WebRequestService) { }


  getLists() {
    return this.webReqService.get('lists');
  }

  createList(title: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('lists', { title });
  }

  updateList(id: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${id}`, { title });
  }

  updateProduct(listId: string, productId: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${listId}/products/${productId}`, { title });
  }

  deleteProduct(listId: string, productId: string) {
    return this.webReqService.delete(`lists/${listId}/products/${productId}`);
  }

  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  getProducts(listId: string) {
    return this.webReqService.get(`lists/${listId}/products`);
  }

  createProduct(title: string, listId: string) {
    // We want to send a web request to create a task
    return this.webReqService.post(`lists/${listId}/products`, { title });
  }

  complete(product: Product) {
    return this.webReqService.patch(`lists/${product._listId}/products/${product._id}`, {
      completed: !product.completed
    });
  }
}
