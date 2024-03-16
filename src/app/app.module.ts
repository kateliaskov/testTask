import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/catalogue/filters/filters.component';
import { RatingModule } from 'primeng/rating';
import { ProductCardComponent } from './components/catalogue/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    CartComponent,
    HeaderComponent,
    FiltersComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
