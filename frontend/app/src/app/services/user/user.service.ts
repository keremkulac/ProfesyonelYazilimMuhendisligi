import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webReqService: WebRequestService) { }


  getUsers() {
    return this.webReqService.get('user-list');
  }

  deleteUser(userId: string) {
    return this.webReqService.delete(`user-list/${userId}`);
  }

}
