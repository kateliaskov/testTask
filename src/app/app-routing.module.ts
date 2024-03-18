import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { AboutProductComponent } from './components/about-product/about-product.component';
import { CartPageComponent } from './components/cart/cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'product/:id', component: AboutProductComponent },
  { path: 'cart', component: CartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
