import { Component, Input, Output, EventEmitter } from '@angular/core';

interface CartItem{
  quantity: number,
  book : {
    ISBN: number,
    title: string,
    author: string,
    summary: string,
    image: string
    price: { currency: string, value : number, displayValue: string }
  }
}
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() declare item: CartItem;

  @Input() declare totalCartValue: number;
  @Output() totalCartValueChange = new EventEmitter<number>();

  @Output() removeBookFromCart : EventEmitter<CartItem> = new EventEmitter<CartItem>;

  removeBook(event: CartItem){
    this.totalCartValue -= (Math.floor(this.item.book.price.value) * this.item.quantity)

    this.totalCartValueChange.emit(this.totalCartValue)

    this.removeBookFromCart.emit(event)
  }

  addQuant(item: CartItem){
    this.item.quantity += 1;
    this.totalCartValue = this.totalCartValue + Math.floor(item.book.price.value);

    this.totalCartValueChange.emit(this.totalCartValue);

    console.log('updated total cart value is: ', this.totalCartValue)
  }

  remQuant(item: CartItem){
    this.item.quantity -= 1
    this.totalCartValue -= Math.floor(item.book.price.value)

    this.totalCartValueChange.emit(this.totalCartValue)

    if (this.item.quantity == 0){
      this.removeBook(item);
    }

  }

}
