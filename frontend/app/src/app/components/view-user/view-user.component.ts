import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  users : User[];
  selectedUserId : string;
  
  constructor(private route: ActivatedRoute, private router: Router,private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((user:any)=>{
      this.users = user;
      console.log(this.users)
    })
    
  }

  onDeleteUserClick(userId:string) {
    this.userService.deleteUser(userId).subscribe((res: any) => {
      this.router.navigate(['/user-list']);
      console.log(res);
    })
  }

  }

 


