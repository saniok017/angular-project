import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { MainComponent } from '../main/main.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartComponent } from '../cart/cart.component';
import { ShippingComponent } from '../shipping/shipping.component';

@NgModule({
  declarations: [
    MainComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [CommonModule, ShopRoutingModule]
})
export class ShopModule {}
