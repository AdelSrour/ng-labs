import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: "", loadComponent: () => import('./home/home.component').then(p => p.HomeComponent) },
    { path: "store", loadComponent: () => import('./store/store.component').then(p => p.StoreComponent) },
    {path: "product/:id", loadComponent: ()=> import ('./product/product.component').then(p => p.ProductComponent), canActivate:[authGuard]},
    { path: "login", loadComponent: () => import('./login/login.component').then(p => p.LoginComponent) },
    { path: "register", loadComponent: () => import('./register/register.component').then(p => p.RegisterComponent) },
    { path: "cart", loadComponent: () => import('./cart/cart.component').then(p => p.CartComponent) },
    { path: "**", loadComponent: () => import('./notfound/notfound.component').then(p => p.NotfoundComponent) },
];
