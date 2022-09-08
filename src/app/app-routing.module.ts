import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailComponent } from './components/detail/detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'list', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart/:id', component: CartComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '', redirectTo: '/list',pathMatch:'full'},
  {path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
