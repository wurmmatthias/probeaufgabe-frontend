import { Component } from '@angular/core';
import { CartService } from '../../services/cart';
import { Auth, User} from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgZone } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [FormsModule, NgIf, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  cartCount = 0;
  showLoginModal = false;
  isLoggedIn = false;
  username = "";
  password = "";
  isMobileMenuOpen = false;

  user: User | null = null;
  showProfileView = false;

  showSuccessMessage = false;
  successMessage = "";

  constructor(
    private auth: Auth,
    private cartService: CartService,
    private zone: NgZone,
    private cd: ChangeDetectorRef
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

    this.auth.user$.subscribe(user => {
      this.user = user;
    });

    this.auth.checkToken();
  }

  toggleProfileView() {
    if (this.isLoggedIn) {
      this.showProfileView = !this.showProfileView;
    } else {
      alert("Bitte zuerst anmelden.");
    }
  }

  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
    console.log('[Navbar] Modal should now close');
  }

  showTemporaryMessage(message: string, duration = 3000) {
    this.zone.run(() => {
      this.successMessage = message;
      this.showSuccessMessage = true;
      this.cd.detectChanges();

      setTimeout(() => {
        this.showSuccessMessage = false;
        this.successMessage = "";
        this.cd.detectChanges();
      }, duration);
    });
  }



  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
      this.zone.run(() => {
        this.closeLoginModal();
        this.cd.detectChanges();
        this.showTemporaryMessage("Erfolgreich angemeldet!");
      });
      },
      error: (err) => {
        console.error('[Navbar] Login failed:', err);
        alert('Login fehlgeschlagen. Bitte überprüfe deine Zugangsdaten.');
      }
    });
  }


  logout() {
    this.auth.logout();
    this.zone.run(() => {
      this.showTemporaryMessage("Erfolgreich abgemeldet!");
    });
  }

toggleMobileMenu() {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}
}
