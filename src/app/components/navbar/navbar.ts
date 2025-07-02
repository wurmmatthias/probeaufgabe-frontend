import { Component } from '@angular/core';
import { CartService } from '../../services/cart';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';




@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [FormsModule, NgIf],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  cartCount = 0;
  showLoginModal = false;
  isLoggedIn = false;
  username = "";
  password = "";

  constructor(
    private auth: Auth,
    private cartService: CartService
  ) {
    // Subscribe to cart count
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });

    // Subscribe to auth status
    this.auth.isLoggedIn$.subscribe(loggedIn => {
        console.log('[Navbar] Login status:', loggedIn);
      this.isLoggedIn = loggedIn;
    });

    this.auth.checkToken();
  }

  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
    console.log('[Navbar] Modal should now close');
  }

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.closeLoginModal();
      },
      error: (err) => {
        console.error('[Navbar] Login failed:', err);
        alert('Login fehlgeschlagen. Bitte überprüfe deine Zugangsdaten.');
      }
    });
  }


  logout() {
    this.auth.logout();
  }
}
