import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  products = [
    {
      name: 'WISO MeinBüro',
      description: 'Die smarte Bürosoftware für Selbstständige und kleine Unternehmen.',
      image: 'assets/logos/gruppelogo.svg',
      link: '/details'
    },
    {
      name: 'WISO Steuer',
      description: 'Die einfache Lösung zur Steuererklärung vom Marktführer.',
      image: 'assets/logos/gruppelogo.svg',
      link: '/details'
    },
    {
      name: 'Finanzblick',
      description: 'Die kostenlose App für Banking & Finanzen im Blick.',
      image: 'assets/logos/gruppelogo.svg',
      link: '/details'
    },
    {
      name: 'WISO MeinBüro',
      description: 'Die smarte Bürosoftware für Selbstständige und kleine Unternehmen.',
      image: 'assets/logos/gruppelogo.svg',
      link: '/details'
    },
    {
      name: 'WISO Steuer',
      description: 'Die einfache Lösung zur Steuererklärung vom Marktführer.',
      image: 'assets/logos/gruppelogo.svg',
      link: '/details'
    },
    {
      name: 'Finanzblick',
      description: 'Die kostenlose App für Banking & Finanzen im Blick.',
      image: 'assets/logos/gruppelogo.svg',
      link: '/details'
    }
  ];
}
