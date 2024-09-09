import { Routes } from '@angular/router';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { authGuard } from './core/guards/auth.guard';
import { blockGuard } from './core/guards/block.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [blockGuard],
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then((m) => m.AuthLayoutComponent),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./component/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./component/register/register.component').then((m) => m.RegisterComponent),
      },
      {
        path: 'forget',
        loadComponent: () =>
          import('./component/forgetpassword/forgetpassword.component').then((m) => m.ForgetpasswordComponent),
      },
    ],
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./layouts/blank-layout/blank-layout.component').then((m) => m.BlankLayoutComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./component/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./component/cart/cart.component').then((m) => m.CartComponent),
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./component/brands/brands.component').then((m) => m.BrandsComponent),
      },
      {
        path: 'catergories',
        loadComponent: () =>
          import('./component/catergories/catergories.component').then((m) => m.CatergoriesComponent),
      },
      {
        path: 'footer',
        loadComponent: () =>
          import('./component/footer/footer.component').then((m) => m.FooterComponent),
      },
      {
        path: 'product',
        loadComponent: () =>
          import('./component/product/product.component').then((m) => m.ProductComponent),
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./component/details/details.component').then((m) => m.DetailsComponent),
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./component/wishlist/wishlist.component').then((m) => m.WishlistComponent),
      },
      {
        path: 'allorders',
        loadComponent: () =>
          import('./component/allorders/allorders.component').then((m) => m.AllordersComponent),
      },
      {
        path: 'order/:cartId',
        loadComponent: () =>
          import('./component/order/order.component').then((m) => m.OrderComponent),
      },
      {
        path: 'cash/:cartId',
        loadComponent: () =>
          import('./component/cash/cash.component').then((m) => m.CashComponent),
      },
      {
        path: 'category/:cartId',
        loadComponent: () =>
          import('./component/onecategory/onecategory.component').then((m) => m.OnecategoryComponent),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./component/notfound/notfound.component').then((m) => m.NotfoundComponent),
  },
];
