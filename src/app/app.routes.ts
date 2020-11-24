import { Route } from '@angular/router';
import { BookComponent } from './component/book/book.component';
import { CartComponent } from './component/cart/cart.component';
import { DetailBookComponent } from './component/detail-book/detail-book.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { BookResolver } from './core/resolvers/book.resolver';
import { LayoutComponent } from './shared/layout/layout/layout.component';

export const ROUTES: Array<Route> = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        resolve: {
          books: BookResolver
        }
      },
      {
        path: 'detail',
        component: BookComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'detail/:id',
        component: DetailBookComponent
      }
    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
