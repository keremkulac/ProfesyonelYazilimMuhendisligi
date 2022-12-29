import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NewListComponent } from './components/new-list/new-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'new-list', component: NewListComponent },
  { path: 'edit-list/:listId', component: EditListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'lists', component: ProductViewComponent },
  { path: 'lists/:listId', component: ProductViewComponent },
  { path: 'lists/:listId/new-product', component: NewProductComponent },
  { path: 'lists/:listId/edit-product/:productId', component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
