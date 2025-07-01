import { Component } from '@angular/core';
import { CartService } from '../../services/cart';


@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.increment();
  }
}
