import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default rout
  { path: "about", component: AboutComponent },
  { path: "product/:id", component: ProductsComponent },
  { path: "cat", component: CategoriesComponent },
  { path: "product", component: ProductsComponent },
  { path: "register", component: RegisterComponent },
  { path: "loginn", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
