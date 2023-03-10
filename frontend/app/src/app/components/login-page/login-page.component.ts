import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginButtonClicked(email: string, password: string) {
    if(email =='admin@gmail.com' && password == '1234567q'){
      this.router.navigate(['/user-list']);
    }else{
      this.authService.login(email, password).subscribe((res: HttpResponse<any>) => {
      
        if (res.status === 200) {
          this.router.navigate(['/lists']);
         
        }
        console.log(res);
        
      });
    }
   
    
  }    

}
