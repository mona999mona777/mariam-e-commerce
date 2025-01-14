import { Routes } from '@angular/router';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { blockGuard } from './core/guards/block.guard';
import { authGuard } from './core/guards/auth.guard';
export const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    canActivate: [blockGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        title: 'shopping'
      },
      {
        path: 'home',
        loadComponent: () => import('./component/home/home.component').then(m => m.HomeComponent),
        title: 'shopping'
      },
      {
        path: 'brands',
        loadComponent: () => import('./component/brands/brands.component').then(m => m.BrandsComponent),
        title: 'shopping brands'
      },
      {
        path: 'branddetails/:brandId',
        loadComponent: () => import('./component/branddetails/branddetails.component').then(m => m.BranddetailsComponent),
        title: 'shopping brand details'
      },
      {
        path: 'catergories',
        loadComponent: () => import('./component/catergories/catergories.component').then(m => m.CatergoriesComponent),
        title: 'shopping catergories'
      },
      {
        path: 'category/:cartId',
        loadComponent: () => import('./component/onecategory/onecategory.component').then(m => m.OnecategoryComponent),
        title: 'shopping category'
      },
      {
        path: 'products',
        loadComponent: () => import('./component/product/product.component').then(m => m.ProductComponent),
        title: 'shopping products'
      },
      {
        path: 'mens',
        loadComponent: () => import('./component/mens-fashion/mens-fashion.component').then(m => m.MensFashionComponent),
        title: 'shopping mens Fashion'
      },
      {
        path: 'womens',
        loadComponent: () => import('./component/women/women.component').then(m => m.WomenComponent),
        title: 'shopping womens Fashion'
      },
      {
        path: 'details/:id',
        loadComponent: () => import('./component/details/details.component').then(m => m.DetailsComponent),
        title: 'shopping details'
      },
      {
        path: 'allorders',
        loadComponent: () => import('./component/allorders/allorders.component').then(m => m.AllordersComponent),
        title: 'shopping allorders'
      },
      {
        path: 'order/:cartId',
        loadComponent: () => import('./component/order/order.component').then(m => m.OrderComponent),
        title: 'shopping order details'
      },
      {
        path: 'cash/:cartId',
        loadComponent: () => import('./component/cash/cash.component').then(m => m.CashComponent),
        title: 'shopping cash payment'
      },
      {
        path: 'footer',
        loadComponent: () => import('./component/footer/footer.component').then(m => m.FooterComponent),
        title: 'shopping footer'
      },
      {
        path: 'cart',
        loadComponent: () => import('./component/cart/cart.component').then(m => m.CartComponent),
        canActivate: [authGuard],
        title: 'shopping cart'
      },
      {
        path: 'wishlist',
        loadComponent: () => import('./component/wishlist/wishlist.component').then(m => m.WishlistComponent),
        canActivate: [authGuard],
        title: 'shopping wishlist'
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [blockGuard],
    children: [
      {
        path: 'siginIn',
        loadComponent: () => import('./component/login/login.component').then(m => m.LoginComponent),
        title: 'shopping signin'
      },
      {
        path: 'siginUp',
        loadComponent: () => import('./component/register/register.component').then(m => m.RegisterComponent),
        title: 'shopping create account'
      },
      {
        path: 'forget',
        loadComponent: () => import('./component/forgetpassword/forgetpassword.component').then(m => m.ForgetpasswordComponent),
        title: 'shopping Forget password'
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: 'Not Found Page (error 404)'
  }
];
