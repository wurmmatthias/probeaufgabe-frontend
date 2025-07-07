import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';


@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.increment();
  }

  @Input() heading: string = '';
  @Input() buttonLabel?: string;
  @Input() logoSrc?: string;
  @Input() imageSrc: string = '';

  @Input() buttonClick?: () => void;           // optional callback
  @Input() buttonLink?: string;                // optional router link
}
