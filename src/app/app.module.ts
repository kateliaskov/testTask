import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HeaderComponent } from './components/header/header.component';
import { RatingModule } from 'primeng/rating';
import { ProductCardComponent } from './components/catalogue/product-card/product-card.component';
import { FiltersComponent } from './components/catalogue/filters/filters.component';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AboutProductComponent } from './components/about-product/about-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducers';
import { CartSidebarComponent } from './components/cart/cart-sidebar/cart-sidebar.component';
import { CartPageComponent } from './components/cart/cart-page/cart-page.component';
import { CartManipulationsService } from './components/cart/cart-manipulations.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    HeaderComponent,
    ProductCardComponent,
    FiltersComponent,
    AboutProductComponent,
    FooterComponent,
    CartSidebarComponent,
    CartPageComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule,
    InputTextModule,
    FormsModule,
    SliderModule,
    ToggleButtonModule,
    ConfirmDialogModule,
    RadioButtonModule,
    DropdownModule,
    StoreModule.forRoot({ cart: cartReducer })
  ],
  providers: [CartManipulationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
