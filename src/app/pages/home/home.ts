import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Cards } from '../../components/cards/cards';
import { Products } from '../../components/products/products';

@Component({
  selector: 'app-home',
  imports: [Hero, Cards, Products],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
