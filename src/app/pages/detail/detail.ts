import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Footer } from '../../components/footer/footer';
import { Cards } from '../../components/cards/cards';
import { Information } from "../../components/information/information";
import { CartService } from '../../services/cart';


@Component({
  selector: 'app-detail',
  imports: [Hero, Cards, Information],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})
export class Detail {
  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.increment();
  }

}
