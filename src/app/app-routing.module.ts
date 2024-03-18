import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { AboutProductComponent } from './components/about-product/about-product.component';

const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'product/:id', component: AboutProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
