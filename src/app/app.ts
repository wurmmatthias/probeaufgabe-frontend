import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import { Cards } from './components/cards/cards';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, Footer, Cards],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'probeaufgabe-frontend';
}

export class AppComponent {}
