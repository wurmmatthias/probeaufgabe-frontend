import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  increment() {
    const current = this.cartCountSubject.value;
    this.cartCountSubject.next(current + 1);
  }

  reset() {
    this.cartCountSubject.next(0);
  }
}
