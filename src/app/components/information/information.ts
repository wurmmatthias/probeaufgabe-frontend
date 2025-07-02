import { Component } from '@angular/core';
import { CartService } from '../../services/cart';


@Component({
  selector: 'app-information',
  imports: [],
  templateUrl: './information.html',
  styleUrl: './information.scss'
})
export class Information {
  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.increment();
  }
}
